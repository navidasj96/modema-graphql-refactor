import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { SubmitInvoiceProductDamageInput } from '@/modules/invoice-product-item/dto/submit-invoice-product-damage.input';
import { InvoiceItemDamageTypes } from '@/utils/invoice-product-item-damage-types';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { SubproductService } from '@/modules/subproduct/subproduct.service';
import { ProductService } from '@/modules/product/product.service';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { AddressService } from '@/modules/address/address.service';
import { UserService } from '@/modules/user/user.service';
import { Address } from '@/modules/address/entities/address.entity';
import { User } from '@/modules/user/entities/user.entity';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import {
  InvoiceStatusEnum,
  SENT_AND_AFTER_SENT_STATUSES,
} from '@/utils/invoice-status';
import { InvoiceModeEnum } from '@/utils/invoice-mode.enum';
import { InvoiceTypeEnum } from '@/utils/invoice-type.enum';
import { InvoicePaymentStatusEnum } from '@/utils/invoice-payment-status';
import { InvoiceInvoiceStatusService } from '@/modules/invoice-invoice-status/invoice-invoice-status.service';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceAddressService } from '@/modules/invoice-address/invoice-address.service';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { InvoiceProductService } from '@/modules/invoice-product/invoice-product.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { InvoiceProductStatusService } from '@/modules/invoice-product-status/invoice-product-status.service';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { InvoiceProductItemDamageTypeEnum } from '../../../utils/invoice-product-item-damage-type.enum';
import { DamageReasonService } from '@/modules/damage-reason/damage-reason.service';
import { BasicCarpetColorService } from '@/modules/basic-carpet-color/basic-carpet-color.service';

@Injectable()
export class DamagedInvoiceItemsControllerProvider {
  constructor(
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject subproductService
     */
    private readonly subproductService: SubproductService,
    /**
     * inject productService
     */
    private readonly productService: ProductService,
    /**
     * inject addressService
     */
    private readonly addressService: AddressService,
    /**
     * inject userService
     */
    private readonly userService: UserService,
    /**
     * inject invoiceService
     */
    @Inject(forwardRef(() => InvoiceService))
    private readonly invoiceService: InvoiceService,
    /**
     * inject invoiceInvoiceStatusService
     */
    private readonly invoiceInvoiceStatusService: InvoiceInvoiceStatusService,
    /**
     * inject invoiceAddressService
     */
    private readonly invoiceAddressService: InvoiceAddressService,
    /**
     * inject invoiceProductService
     */
    private readonly invoiceProductService: InvoiceProductService,
    /**
     * inject invoiceProductStatusService
     */
    private readonly invoiceProductStatusService: InvoiceProductStatusService,
    /**
     * inject InvoiceProductItemInvoiceProductStatusService
     */
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
    /**
     * inject damageReasonService
     */
    private readonly damageReasonService: DamageReasonService,
    /**
     * inject basicCarpetColorService
     */
    private readonly basicCarpetColorService: BasicCarpetColorService
  ) {}

  private damageReason: null | string = null;
  private damageCause: null | string = null;
  private damageType: null | number = null;
  private newProducts: SubmitInvoiceProductDamageInput['newProducts'];
  private addressForDamages: Address | null;
  private userForDamages: User | null;
  private invoiceForDamages: Invoice;
  private invoiceProductDamaged: InvoiceProduct;
  async submitDamagedInvoiceItems(
    context: { req: UserContext },
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput
  ) {
    const { req } = context;
    const { user } = req;
    const { sub: userId } = user;
    const hasPermissionToSubmitDamages =
      await this.authService.userPermissionCheck(
        [
          InvoiceProductItemPermissions.PERMISSION_TO_SUBMIT_DAMAGED_INVOICE_ITEMS,
        ],
        context
      );

    if (!hasPermissionToSubmitDamages) {
      throw new GraphQLError(
        'You do not have permission to submit damaged invoice items.'
      );
    }

    const validationResult = await this.validateFields(
      submitInvoiceProductDamageInput
    );
    if (!validationResult || !validationResult.status) {
      throw new GraphQLError(
        validationResult?.message || 'تمام موارد خواسته شده را وارد کنید'
      );
    }
    const { id } = submitInvoiceProductDamageInput;
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);

    const invoiceProductItem = await invoiceProductItemRepository.findOne({
      where: { id },
      relations: {
        invoiceProduct: { invoice: true, subproduct: true },
      },
    });
    if (!invoiceProductItem) {
      throw new GraphQLError('Invoice product item not found.');
    }
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await this.createNewInvoiceForDamagedProduct(
        invoiceProductItem,
        userId,
        manager
      );

      await this.changeRelationInvoiceProductItemToNewInvoice(
        submitInvoiceProductDamageInput,
        invoiceProductItem,
        userId,
        invoiceProductItemRepository,
        manager
      );

      await this.createNewInvoiceForConvertedProducts(
        userId,
        invoiceProductItemRepository,
        manager
      );

      await this.createNewInvoiceProductItemToProduceForCustomers(
        invoiceProductItem,
        invoiceProductItemRepository,
        userId,
        manager
      );

      await queryRunner.commitTransaction();

      return {
        message: 'ثبت معیوبی کالا حین تولید با موفقیت انجام شد',
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError('مشکلی پیش آمد', {
        extensions: {
          code: 'BAD_USER_INPUT',
          originalError: {
            message: 'مشکلی در تغییر وضعیت ایتم بوجود امده است',
            error: error?.message,
            stack: error?.stack,
            statusCode: 400,
          },
        },
      });
    } finally {
      await queryRunner.release();
    }
  }

  private async validateFields(
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput
  ) {
    if (submitInvoiceProductDamageInput.damageReasonId == 0) {
      return {
        message: 'لطفا دلیل اعلام معیوبی کالا را وارد نمایید',
        status: false,
      };
    } else {
      const damageReason = await this.damageReasonService.findOne({
        where: { id: submitInvoiceProductDamageInput.damageReasonId },
      });

      this.damageCause = damageReason ? damageReason.name : null;
    }

    if (
      submitInvoiceProductDamageInput.damageType ==
      InvoiceItemDamageTypes.DAMAGE_TYPE_CAN_BE_CONVERTED_TO_OTHER_PRODUCTS_OR_SIZES
    ) {
      const newProducts = submitInvoiceProductDamageInput.newProducts;
      if (!newProducts) {
        return {
          message:
            'لطفا در صورت تولید محصول جدید از کالای معیوب شده، حداقل یک محصول جدید را انتخاب نمایید',
          status: false,
        };
      } else {
        this.newProducts = newProducts;
      }

      for (const newProduct of newProducts) {
        if (
          !newProduct.product ||
          !newProduct.size ||
          !newProduct.status ||
          !newProduct.color
        ) {
          return {
            message:
              'لطفا در صورت تولید محصول جدید از کالای معیوب شده، همه ستون ها را تکمیل و انتخاب نمایید',
            status: false,
          };
        }
      }
    }
    return {
      message: 'صحیح',
      status: true,
    };
  }

  private async createNewInvoiceForDamagedProduct(
    invoiceProductItem: InvoiceProductItem,
    userId: number,
    manager: EntityManager
  ) {
    const invoiceProduct = invoiceProductItem.invoiceProduct;
    const invoice = invoiceProduct.invoice;
    if (SENT_AND_AFTER_SENT_STATUSES.includes(invoice.currentInvoiceStatusId)) {
      return {
        message:
          "'صورتحساب انتخابی در مرحله ارسال شده است و در این مرحله امکان اعلام معیوبی وجود ندارد.'",
        status: false,
      };
    }
    const addressForDamages = await this.addressService.findOne({
      where: { id: 4 },
    });
    const userForDamages = await this.userService.findOne({ where: { id: 4 } });

    if (!userForDamages || !addressForDamages) {
      throw new GraphQLError('User for damages not found.');
    }
    const newInvoiceNumber = await this.invoiceService.getNewInvoiceNumber(
      invoice.id
    );
    //create new invoice for damaged product
    const invoiceForDamages = new Invoice();
    invoiceForDamages.userId = userForDamages?.id ?? null;
    invoiceForDamages.currentInvoiceStatusId =
      InvoiceStatusEnum.DAMAGED_DURING_PRODUCTION;
    invoiceForDamages.addressId = addressForDamages?.id ?? 4;
    invoiceForDamages.invoiceModeId = InvoiceModeEnum.INVOICE_MODE_DAMAGED;
    invoiceForDamages.invoiceTypeId = InvoiceTypeEnum.FOR_DEPOT;
    invoiceForDamages.name = userForDamages.name;
    invoiceForDamages.lastName = userForDamages.family;
    invoiceForDamages.issueDate = new Date();
    invoiceForDamages.taxRate = 0;
    invoiceForDamages.shippingRate = 0;
    invoiceForDamages.shippingRateCod = 0;
    invoiceForDamages.paidCodShippingRate = 0;
    invoiceForDamages.subtotalPrice = 0;
    invoiceForDamages.totalPrice = 0;
    invoiceForDamages.couponId = null;
    invoiceForDamages.refId = null;
    invoiceForDamages.orderId = null;
    invoiceForDamages.selectedShippingServiceId = null;
    invoiceForDamages.visitorCouponId = null;
    invoiceForDamages.visitorRate = null;
    invoiceForDamages.totalVisitorShare = null;
    invoiceForDamages.totalDiscount = null;
    invoiceForDamages.totalCouponDiscount = null;
    invoiceForDamages.invoicePaymentStatusId =
      InvoicePaymentStatusEnum.DEPOT_WITHOUT_PAYMENT;
    invoiceForDamages.cashOnDelivery = 0;
    invoiceForDamages.parentInvoiceId = invoice.id;
    invoiceForDamages.isDepot = 1;
    invoiceForDamages.invoiceNumber = newInvoiceNumber;
    invoiceForDamages.createdAt = new Date();
    invoiceForDamages.updatedAt = new Date();
    await this.invoiceService.save(invoiceForDamages, manager);

    this.invoiceForDamages = invoiceForDamages;

    // تغییرات انجام شده در وضعیت فاکتور در جدول تاریخچه وضعیت های فاکتور همراه با کاربر تغییر دهنده آن ذخیره می شود
    const comment =
      'صورتحساب معیوبی جهت کالاهایی که در حین تولید معیوب شده اند';
    await this.invoiceInvoiceStatusService.attach(
      invoice.id,
      invoice.currentInvoiceStatusId,
      userId,
      comment,
      manager
    );

    const invoiceAddressForDamages = new InvoiceAddress();
    invoiceAddressForDamages.invoiceId = invoiceForDamages.id;
    invoiceAddressForDamages.addressId = addressForDamages.id;
    invoiceAddressForDamages.userId = userForDamages.id;
    invoiceAddressForDamages.countryId = addressForDamages.countryId;
    invoiceAddressForDamages.stateId = addressForDamages.stateId;
    invoiceAddressForDamages.cityId = addressForDamages.cityId;
    invoiceAddressForDamages.zipCode = addressForDamages.zipCode;
    invoiceAddressForDamages.address = addressForDamages.address;
    invoiceAddressForDamages.address2 = addressForDamages.address2;
    invoiceAddressForDamages.phone = addressForDamages.phone;
    invoiceAddressForDamages.phone2 = addressForDamages.phone2;
    invoiceAddressForDamages.longitude = addressForDamages.longitude;
    invoiceAddressForDamages.latitude = addressForDamages.latitude;
    invoiceAddressForDamages.email = addressForDamages.email;
    invoiceAddressForDamages.fullAddress = addressForDamages.fullAddress;
    invoiceAddressForDamages.fullname = addressForDamages.fullname;

    await this.invoiceAddressService.save(invoiceAddressForDamages, manager);

    const invoiceProductDamaged = new InvoiceProduct();
    invoiceProductDamaged.invoiceId = invoiceForDamages.id;
    invoiceProductDamaged.productId = invoiceProduct.productId;
    invoiceProductDamaged.subproductId = invoiceProduct.subproductId;
    invoiceProductDamaged.price = invoiceProduct.price;
    invoiceProductDamaged.count = 1;
    invoiceProductDamaged.totalPrice = invoiceProduct.price;
    invoiceProductDamaged.withPad = 0;

    await this.invoiceProductService.save(invoiceProductDamaged, manager);

    this.invoiceProductDamaged = invoiceProductDamaged;
  }

  private async changeRelationInvoiceProductItemToNewInvoice(
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput,
    invoiceProductItem: InvoiceProductItem,
    userId: number,
    invoiceProductItemRepository: Repository<InvoiceProductItem>,
    manager: EntityManager
  ) {
    invoiceProductItem.invoiceProductId = this.invoiceProductDamaged.id;
    invoiceProductItem.damageType = this.damageType;
    invoiceProductItem.damageReasonId =
      submitInvoiceProductDamageInput.damageReasonId;
    invoiceProductItem.damageCause = this.damageCause;
    invoiceProductItem.currentStatusId =
      InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION;

    await invoiceProductItemRepository.save(invoiceProductItem);
    await this.invoiceProductItemInvoiceProductStatusService.attach(
      invoiceProductItem.id,
      invoiceProductItem.currentStatusId,
      userId,
      'معیوبی در حین تولید',
      manager
    );
  }

  private async createNewInvoiceForConvertedProducts(
    userId: number,
    invoiceProductItemRepository: Repository<InvoiceProductItem>,
    manager: EntityManager
  ) {
    if (
      this.damageType ==
      InvoiceProductItemDamageTypeEnum.DAMAGE_TYPE_CAN_BE_CONVERTED_TO_OTHER_PRODUCTS_OR_SIZES
    ) {
      const userForDamages = this.userForDamages;
      const addressForDamages = this.addressForDamages;
      if (!userForDamages || !addressForDamages) {
        throw new GraphQLError('User or address for damages not found.');
      }

      if (!this.newProducts) {
        return {
          message: 'هیچ محصول جدیدی برای تولید از کالای معیوب انتخاب نشده است',
          status: false,
        };
      }

      const newProducts = this.newProducts;
      const newInvoiceNumber = await this.invoiceService.getNewInvoiceNumber();

      const invoiceForNewProducts = new Invoice();
      invoiceForNewProducts.userId = userForDamages.id;
      invoiceForNewProducts.userId = userForDamages.id;
      invoiceForNewProducts.currentInvoiceStatusId =
        InvoiceStatusEnum.PREPARING_PRODUCTS;
      invoiceForNewProducts.addressId = addressForDamages.id;
      invoiceForNewProducts.invoiceModeId =
        InvoiceModeEnum.INVOICE_MODE_CREATED_FROM_DAMAGED;
      invoiceForNewProducts.invoiceTypeId = InvoiceTypeEnum.FOR_DEPOT;
      invoiceForNewProducts.name = userForDamages.name;
      invoiceForNewProducts.lastName = userForDamages.family;
      invoiceForNewProducts.issueDate = new Date();
      invoiceForNewProducts.taxRate = 0;
      invoiceForNewProducts.shippingRate = 0;
      invoiceForNewProducts.shippingRateCod = 0;
      invoiceForNewProducts.paidCodShippingRate = 0;
      invoiceForNewProducts.subtotalPrice = 0;
      invoiceForNewProducts.totalPrice = 0;
      invoiceForNewProducts.couponId = null;
      invoiceForNewProducts.refId = null;
      invoiceForNewProducts.orderId = null;
      invoiceForNewProducts.selectedShippingServiceId = null;
      invoiceForNewProducts.visitorCouponId = null;
      invoiceForNewProducts.visitorRate = null;
      invoiceForNewProducts.totalVisitorShare = null;
      invoiceForNewProducts.totalDiscount = null;
      invoiceForNewProducts.totalCouponDiscount = null;
      invoiceForNewProducts.invoicePaymentStatusId =
        InvoicePaymentStatusEnum.DEPOT_WITHOUT_PAYMENT;
      invoiceForNewProducts.cashOnDelivery = 0;
      invoiceForNewProducts.parentInvoiceId = this.invoiceForDamages.id;
      invoiceForNewProducts.isDepot = 1;

      // به شماره فاکتوری که با فرمول بالا به دست آمد تاریخ جاری اضافه می شود و همچنین با قرار دادن تعدادی صفر قبل از عدد، شماره آن به یک عدد 5 رقمی تبدیل میشود
      invoiceForNewProducts.invoiceNumber = newInvoiceNumber;

      await this.invoiceService.save(invoiceForNewProducts, manager);
      const comment =
        'صورتحساب معیوبی جهت کالاهایی که از کالای معیوبی تولید می شوند';
      await this.invoiceInvoiceStatusService.attach(
        invoiceForNewProducts.id,
        invoiceForNewProducts.currentInvoiceStatusId,
        userId,
        comment,
        manager
      );

      const invoiceAddressForNewProducts = new InvoiceAddress();
      invoiceAddressForNewProducts.invoiceId = invoiceForNewProducts.id;
      invoiceAddressForNewProducts.addressId = addressForDamages.id;
      invoiceAddressForNewProducts.userId = userForDamages.id;
      invoiceAddressForNewProducts.countryId = addressForDamages.countryId;
      invoiceAddressForNewProducts.stateId = addressForDamages.stateId;
      invoiceAddressForNewProducts.cityId = addressForDamages.cityId;
      invoiceAddressForNewProducts.zipCode = addressForDamages.zipCode;
      invoiceAddressForNewProducts.address = addressForDamages.address;
      invoiceAddressForNewProducts.address2 = addressForDamages.address2;
      invoiceAddressForNewProducts.phone = addressForDamages.phone;
      invoiceAddressForNewProducts.phone2 = addressForDamages.phone2;
      invoiceAddressForNewProducts.longitude = addressForDamages.longitude;
      invoiceAddressForNewProducts.latitude = addressForDamages.latitude;
      invoiceAddressForNewProducts.fullname = addressForDamages.fullname;
      invoiceAddressForNewProducts.email = addressForDamages.email;
      invoiceAddressForNewProducts.fullAddress = addressForDamages.fullAddress;

      await this.invoiceAddressService.save(
        invoiceAddressForNewProducts,
        manager
      );

      for (const newProduct of newProducts) {
        if (
          newProduct.product &&
          newProduct.color &&
          newProduct.status &&
          newProduct.size
        ) {
          const selectedSubproduct = await this.subproductService.findOne({
            where: {
              productId: newProduct.product,
              basicCarpetSizeId: newProduct.size,
              basicCarpetColorId: newProduct.color,
            },
          });

          if (!selectedSubproduct) {
            const product = await this.productService.findOne({
              where: { id: newProduct.product },
            });
            const color = await this.basicCarpetColorService.findOne({
              where: { id: newProduct.color },
            });

            throw new GraphQLError(
              `محصول ${product?.name} با رنگ subproduct ${color?.title}  در سیستم تعریف نشده است. لطفا رنگ و سایز محصول انتخابی را بازبینی نمایید.`
            );
          }

          const invoiceProductForNewProduct = new InvoiceProduct();
          invoiceProductForNewProduct.invoiceId = invoiceForNewProducts.id;
          invoiceProductForNewProduct.productId = selectedSubproduct.productId;
          invoiceProductForNewProduct.subproductId = selectedSubproduct.id;
          invoiceProductForNewProduct.price = selectedSubproduct.price || 0;
          invoiceProductForNewProduct.count = 1;
          invoiceProductForNewProduct.totalPrice = selectedSubproduct.price;
          invoiceProductForNewProduct.withPad = 0;
          invoiceProductForNewProduct.invoiceProductItemsCreated = 1;
          invoiceProductForNewProduct.itemsToProduce = 1;
          invoiceProductForNewProduct.itemsFromDepot = 0;

          await this.invoiceProductService.save(
            invoiceProductForNewProduct,
            manager
          );

          const rowForNewProduct = 1;
          const invoiceProductItemForNewProduct = new InvoiceProductItem();
          invoiceProductItemForNewProduct.row = rowForNewProduct;
          invoiceProductItemForNewProduct.invoiceProductId =
            invoiceProductForNewProduct.id;
          invoiceProductItemForNewProduct.currentStatusId =
            newProduct['status'];
          invoiceProductItemForNewProduct.code =
            invoiceForNewProducts.invoiceNumber +
            '_' +
            selectedSubproduct.id +
            '_' +
            rowForNewProduct;
          invoiceProductItemForNewProduct.isTagPrinted = 0;

          await invoiceProductItemRepository.save(
            invoiceProductItemForNewProduct
          );

          await this.invoiceProductItemInvoiceProductStatusService.attach(
            invoiceProductItemForNewProduct.id,
            invoiceProductItemForNewProduct.currentStatusId,
            userId,
            'آیتم جدید جهت ادامه فرآیند تولید از کالای معیوبی انتخابی ایجاد گردید',
            manager
          );
        }
      }
    }
  }

  private async createNewInvoiceProductItemToProduceForCustomers(
    invoiceProductItem: InvoiceProductItem,
    invoiceProductItemRepository: Repository<InvoiceProductItem>,
    userId: number,
    manager: EntityManager
  ) {
    const invoiceProduct = invoiceProductItem.invoiceProduct;
    const subproduct = invoiceProduct.subproduct;
    const invoice = invoiceProduct.invoice;

    // New production items are not needed for depot invoices...
    if (invoice.invoiceTypeId != InvoiceTypeEnum.FOR_DEPOT) {
      const newRow = invoiceProductItem.row;
      const newInvoiceProductItem = new InvoiceProductItem();
      newInvoiceProductItem.row = newRow;
      newInvoiceProductItem.invoiceProductId = invoiceProduct.id;
      newInvoiceProductItem.currentStatusId =
        InvoiceProductStatusEnum.BEGIN_PRODUCTION;
      newInvoiceProductItem.fromDepot = 0;

      let prefix: string;

      if (invoiceProductItem.code.startsWith('m')) {
        const explodedCode = invoiceProductItem.code.split('_');
        const numericPart = parseInt(explodedCode[0].replace('m', ''), 10);
        const incremented = numericPart + 1;
        prefix = 'm' + incremented.toString().padStart(2, '0');
      } else {
        prefix = 'm01';
      }

      newInvoiceProductItem.code =
        prefix +
        '_' +
        invoice.invoiceNumber +
        '_' +
        subproduct.id +
        '_' +
        newRow;

      await invoiceProductItemRepository.save(newInvoiceProductItem);

      await this.invoiceProductItemInvoiceProductStatusService.attach(
        newInvoiceProductItem.id,
        newInvoiceProductItem.currentStatusId,
        userId,
        'آیتم جدید جهت ادامه فرآیند تولید از کالای معیوبی انتخابی ایجاد گردید',
        manager
      );
    }
  }
}
