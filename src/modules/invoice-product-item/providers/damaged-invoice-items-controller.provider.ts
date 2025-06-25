import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { SubmitInvoiceProductDamageInput } from '@/modules/invoice-product-item/dto/submit-invoice-product-damage.input';
import { InvoiceItemDamageTypes } from '@/utils/invoice-product-item-damage-types';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
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
import { InvoiceStatusEnum } from '@/utils/invoice-status';
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
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService
  ) {}

  private damageCause: null | string = null;
  private damageType: null | number = null;
  private newProducts: any;
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

    if (!validationResult.status) {
      throw new GraphQLError(validationResult.message);
    }
    const { id, damageCause, damageType, newProducts } =
      submitInvoiceProductDamageInput;
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);

    const invoiceProductItem = await invoiceProductItemRepository.findOne({
      where: { id },
      relations: {
        invoiceProduct: { invoice: true },
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
        invoiceProductItem,
        userId,
        invoiceProductItemRepository,
        manager
      );
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new GraphQLError(
        `Error creating new invoice for damaged product: ${error}`
      );
    } finally {
      await queryRunner.release();
    }
  }

  private async validateFields(
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput
  ) {
    if (
      !submitInvoiceProductDamageInput.damageCause ||
      submitInvoiceProductDamageInput.damageCause == ''
    ) {
      return {
        message: 'لطفا دلیل اعلام معیوبی کالا را بطور خلاصه وارد نمایید',
        status: false,
      };
    } else {
      this.damageCause = submitInvoiceProductDamageInput.damageCause;
    }

    if (
      !submitInvoiceProductDamageInput.damageType ||
      ![
        InvoiceItemDamageTypes.DAMAGE_TYPE_CAN_BE_CONVERTED_TO_OTHER_PRODUCTS_OR_SIZES,
        InvoiceItemDamageTypes.DAMAGE_TYPE_COMPLETELY_DAMAGED,
      ].includes(submitInvoiceProductDamageInput.damageType)
    ) {
      return {
        message: 'لطفا نوع معیوب شدن کالا را انتخاب نمایید',
        status: false,
      };
    } else {
      this.damageType = submitInvoiceProductDamageInput.damageType;
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
          !newProduct.productId ||
          !newProduct.subproductId ||
          !newProduct.statusId
        ) {
          return {
            message:
              'لطفا در صورت تولید محصول جدید از کالای معیوب شده، رنگ و سایز محصول جدید و وضعیت فعلی آن را انتخاب نمایید',
            status: false,
          };
        }

        const selectedSubproduct = await this.subproductService.findOne({
          where: {
            productId: newProduct.productId,
            id: newProduct.subproductId,
          },
        });

        if (!selectedSubproduct) {
          const product = await this.productService.findOne({
            where: { id: newProduct.productId },
          });

          return {
            message: `محصول
            ${product?.name}
            با شناسه subproduct
            ${newProduct.subproductId}
            در سیستم تعریف نشده است
            `,
            status: false,
          };
        }
      }
    }

    return {
      message: 'موارد ارسالی شما معتبر است',
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
    invoiceProductItem: InvoiceProductItem,
    userId: number,
    invoiceProductItemRepository: Repository<InvoiceProductItem>,
    manager: EntityManager
  ) {
    invoiceProductItem.invoiceProductId = this.invoiceProductDamaged.id;
    invoiceProductItem.damageType = this.damageType;
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

  private async createNewInvoiceForConvertedProducts() {
    if (
      this.damageType ==
      InvoiceProductItemDamageTypeEnum.DAMAGE_TYPE_CAN_BE_CONVERTED_TO_OTHER_PRODUCTS_OR_SIZES
    ) {
      const userForDamages = this.userForDamages;
      const addressForDamages = this.addressForDamages;
      const newProducts = this.newProducts;
    }
  }
}
