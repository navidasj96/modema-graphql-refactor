import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceAddressService } from '@/modules/invoice-address/invoice-address.service';
import { InvoiceInvoiceStatusService } from '@/modules/invoice-invoice-status/invoice-invoice-status.service';
import { CreateNewInvoiceItemForDepotInput } from '@/modules/invoice-product-item/dto/create-new-invoice-item-for-depot.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { InvoiceProductService } from '@/modules/invoice-product/invoice-product.service';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { SubproductService } from '@/modules/subproduct/subproduct.service';
import { UserService } from '@/modules/user/user.service';
import { InvoiceModeEnum } from '@/utils/invoice-mode.enum';
import { InvoicePaymentStatusEnum } from '@/utils/invoice-payment-status';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import {
  ADDRESS_ID_FOR_DEPOT_INVOICES,
  InvoiceStatusEnum,
  USER_ID_FOR_DEPOT_INVOICES,
} from '@/utils/invoice-status';
import { InvoiceTypeEnum } from '@/utils/invoice-type.enum';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrintRipService } from '@/modules/print-rip/print-rip.service';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { GeneralResponseDto } from '@/utils/general-response.dto';

@Injectable()
export class CreateNewInvoiceItemForDepotProvider {
  constructor(
    /**
     * inject addressService
     */
    private readonly invoiceAddressService: InvoiceAddressService,
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
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject subproductService
     */
    private readonly subproductService: SubproductService,
    /**
     * inject invoiceProductService
     */
    private readonly invoiceProductService: InvoiceProductService,
    /**
     * inject invoiceProductItemInvoiceProductStatusService
     */
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
    /**
     * inject printRipService
     */
    private readonly printRipService: PrintRipService
  ) {}

  async addNewSubproductForDepot(
    createNewInvoiceItemForDepotInput: CreateNewInvoiceItemForDepotInput,
    context: { req: UserContext }
  ): Promise<GeneralResponseDto> {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;

    const { products, printRipId: printRipIdFromRequest } =
      createNewInvoiceItemForDepotInput;
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);

    let printRipIdForItems: PrintRip | null = null;
    const printRip = await this.printRipService.printRipForDepot();
    if (printRip) {
      printRipIdForItems = printRip;
    }
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (products.length > 0) {
        const invoiceForDepot = await this.createNewInvoiceForDepot(
          userId,
          manager
        );

        for (const product of products) {
          const subproduct = await this.subproductService.findOne({
            where: {
              productId: product.productId,
              basicCarpetSizeId: product.sizeId,
              basicCarpetColorId: product.colorId,
            },
          });

          if (subproduct) {
            await this.createNewInvoiceProductForDepot(
              invoiceProductItemRepository,
              invoiceForDepot,
              subproduct,
              printRipIdFromRequest
                ? printRipIdFromRequest
                : printRipIdForItems
                  ? printRipIdForItems.id
                  : null,
              userId,
              manager
            );
          }
        }
        await queryRunner.commitTransaction();
      }
      return {
        status: true,
        message: 'کالای جدید با موفقیت برای دپو ثبت شد',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();

      return {
        status: false,
        message: `Error creating new invoice item for depot: ${error}`,
      };
    } finally {
      await queryRunner.release();
    }
  }

  async createNewInvoiceForDepot(userId: number, manager: EntityManager) {
    const addressForDepot = await this.invoiceAddressService.findOne({
      where: { id: ADDRESS_ID_FOR_DEPOT_INVOICES },
    });
    const userForDepot = await this.userService.findOne({
      where: { id: USER_ID_FOR_DEPOT_INVOICES },
    });
    let invoiceForDepot = await this.invoiceService.findOne({
      where: {
        currentInvoiceStatusId: InvoiceStatusEnum.PREPARING_PRODUCTS,
        userId: USER_ID_FOR_DEPOT_INVOICES,
        isDepot: 1,
      },
      relations: { invoiceProducts: true },
    });

    if (!addressForDepot || !userForDepot) {
      throw new Error('Address or User for depot not found');
    }

    if (!invoiceForDepot) {
      const newInvoiceNumber = await this.invoiceService.getNewInvoiceNumber();

      invoiceForDepot = new Invoice();
      invoiceForDepot.currentInvoiceStatusId =
        InvoiceStatusEnum.PREPARING_PRODUCTS;

      invoiceForDepot.addressId = addressForDepot.id;
      invoiceForDepot.invoiceModeId = InvoiceModeEnum.INVOICE_MODE_FOR_DEPOT;
      invoiceForDepot.invoiceTypeId = InvoiceTypeEnum.FOR_DEPOT;
      invoiceForDepot.name = userForDepot.name;
      invoiceForDepot.lastName = userForDepot.family;
      invoiceForDepot.issueDate = new Date();
      invoiceForDepot.taxRate = 0;
      invoiceForDepot.shippingRate = 0;
      invoiceForDepot.shippingRateCod = 0;
      invoiceForDepot.paidCodShippingRate = 0;
      invoiceForDepot.subtotalPrice = 0;
      invoiceForDepot.totalPrice = 0;
      invoiceForDepot.couponId = null;
      invoiceForDepot.refId = null;
      invoiceForDepot.orderId = null;
      invoiceForDepot.selectedShippingServiceId = null;
      invoiceForDepot.visitorCouponId = null;
      invoiceForDepot.visitorRate = null;
      invoiceForDepot.totalVisitorShare = null;
      invoiceForDepot.totalDiscount = null;
      invoiceForDepot.totalCouponDiscount = null;
      invoiceForDepot.invoicePaymentStatusId =
        InvoicePaymentStatusEnum.DEPOT_WITHOUT_PAYMENT;
      invoiceForDepot.cashOnDelivery = 0;
      invoiceForDepot.isDepot = 1;
      invoiceForDepot.invoiceNumber = newInvoiceNumber;

      try {
        await this.invoiceService.save(invoiceForDepot, manager);
        await this.invoiceInvoiceStatusService.attach(
          invoiceForDepot.id,
          invoiceForDepot.currentInvoiceStatusId,
          userId,
          'ایجاد صورتحساب دپو برای کالاهایی که جهت کاهش ضایعات چاپ، کنار طرح‌های مشتریان چاپ شده است',
          manager
        );

        const invoiceAddressForNewProducts = new InvoiceAddress();
        invoiceAddressForNewProducts.invoiceId = invoiceForDepot.id;
        invoiceAddressForNewProducts.addressId = addressForDepot.id;
        invoiceAddressForNewProducts.userId = userForDepot.id;
        invoiceAddressForNewProducts.countryId = addressForDepot.countryId;
        invoiceAddressForNewProducts.stateId = addressForDepot.stateId;
        invoiceAddressForNewProducts.cityId = addressForDepot.cityId;
        invoiceAddressForNewProducts.zipCode = addressForDepot.zipCode;
        invoiceAddressForNewProducts.address = addressForDepot.address;
        invoiceAddressForNewProducts.address2 = addressForDepot.address2;
        invoiceAddressForNewProducts.phone = addressForDepot.phone;
        invoiceAddressForNewProducts.phone2 = addressForDepot.phone2;
        invoiceAddressForNewProducts.longitude = addressForDepot.longitude;
        invoiceAddressForNewProducts.latitude = addressForDepot.latitude;
        invoiceAddressForNewProducts.fullname = addressForDepot.fullname;
        invoiceAddressForNewProducts.email = addressForDepot.email;
        invoiceAddressForNewProducts.fullAddress = addressForDepot.fullAddress;

        await this.invoiceAddressService.save(
          invoiceAddressForNewProducts,
          manager
        );
      } catch (error) {
        throw new Error(`Error creating invoice for depot: ${error}`);
      }
    }

    return invoiceForDepot;
  }

  async createNewInvoiceProductForDepot(
    invoiceProductItemRepository: Repository<InvoiceProductItem>,
    invoiceForDepot: Invoice,
    subproduct: Subproduct,
    printRipId: number | null,
    userId: number,
    manager: EntityManager
  ) {
    let invoiceProductForDepotCanceled = invoiceForDepot.invoiceProducts.find(
      (invoiceProduct) => invoiceProduct.subproductId === subproduct.id
    );

    let newCount = 0;
    if (!invoiceProductForDepotCanceled) {
      invoiceProductForDepotCanceled = new InvoiceProduct();
      newCount = 1;
    } else {
      newCount = invoiceProductForDepotCanceled.count + 1;
    }

    invoiceProductForDepotCanceled.invoiceId = invoiceForDepot.id;
    invoiceProductForDepotCanceled.productId = subproduct.productId;
    invoiceProductForDepotCanceled.subproductId = subproduct.id;
    invoiceProductForDepotCanceled.price = subproduct.price;
    invoiceProductForDepotCanceled.bundlePrice = subproduct.bundlePrice;
    invoiceProductForDepotCanceled.totalPrice = subproduct.price
      ? subproduct.price *
        (invoiceProductForDepotCanceled.count
          ? invoiceProductForDepotCanceled.count
          : 0)
      : null;
    invoiceProductForDepotCanceled.withPad = 0;
    invoiceProductForDepotCanceled.count = newCount;
    invoiceProductForDepotCanceled.invoiceProductItemsCreated = 1;
    invoiceProductForDepotCanceled.itemsToProduce = newCount;
    invoiceProductForDepotCanceled.itemsFromDepot = 0;

    await this.invoiceProductService.save(
      invoiceProductForDepotCanceled,
      manager
    );

    const invoiceProductItem = new InvoiceProductItem();
    invoiceProductItem.invoiceProductId = invoiceProductForDepotCanceled.id;
    invoiceProductItem.row = newCount;
    invoiceProductItem.code =
      invoiceForDepot.invoiceNumber + '_' + subproduct.id + '_' + newCount;
    invoiceProductItem.isTagPrinted = 0;
    invoiceProductItem.printRipId = printRipId;
    invoiceProductItem.isPrintedAndHeated = 0;
    invoiceProductItem.currentStatusId =
      InvoiceProductStatusEnum.BEGIN_PRODUCTION;

    await invoiceProductItemRepository.save(invoiceProductItem);
    await this.invoiceProductItemInvoiceProductStatusService.attach(
      invoiceProductItem.id,
      invoiceProductItem.currentStatusId,
      userId,
      'آیتم جدید دپو برای کالاهایی که جهت کاهش ضایعات چاپ، کنار طرح‌های مشتریان چاپ شده است',
      manager
    );
  }
}
