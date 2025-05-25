import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemInvoiceProductStatusService } from '@/modules/invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.service';
import { InvoiceProductItemService } from '@/modules/invoice-product-item/invoice-product-item.service';
import { ChangeInvoicesStatusResponseDto } from '@/modules/invoice/dto/change-invoices-status-response.dto';
import { ChangeInvoicesStatusInput } from '@/modules/invoice/dto/change-invoices-status.input';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { permissionsToChangeInvoiceStatusEnum } from '@/modules/user/helpers/permission-to-change-invoice-status';
import { RolesNameEnum } from '@/utils/general-enums.enum';
import { checkUserHasPermission, checkUserHasRole } from '@/utils/helpers';
import {
  ALL_WHOLESALE_PAYMENT_STATUSES,
  InvoicePaymentStatusEnum,
} from '@/utils/invoice-payment-status';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import {
  InvoiceStatusEnum,
  READY_TO_SEND_INVOICE_STATUSES,
} from '@/utils/invoice-status';
import { InvoicePermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, In, IsNull, Repository } from 'typeorm';
import { ShippingServiceService } from '@/modules/shipping-service/shipping-service.service';
import { ShippingServiceEnum } from '@/utils/ShippingServiceEnum';
import { ConfigService } from '@nestjs/config';
import { VisitorService } from '@/modules/visitor/visitor.service';
import { InjectQueue } from '@nestjs/bull';
import { JobsEnum } from '@/jobs/enum/jobsEnum';
import { Queue } from 'bull';
import { User } from '@/modules/user/entities/user.entity';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductService } from '@/modules/invoice-product/invoice-product.service';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/entities/invoice-invoice-status.entity';
import { InvoiceInvoiceStatusService } from '@/modules/invoice-invoice-status/invoice-invoice-status.service';
import { InvoiceHistoryService } from '@/modules/invoice-history/invoice-history.service';

@Injectable()
export class ChangeInvoiceStatusProvider {
  constructor(
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject invoiceProductItemService
     */
    private readonly invoiceProductItemService: InvoiceProductItemService,
    /**
     * inject invoiceProductItemInvoiceProductStatusService
     */
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
    /**
     * inject shippingService
     */
    private readonly shippingService: ShippingServiceService,
    /**
     * inject configService
     */
    private readonly configService: ConfigService,
    /**
     * inject visitorService
     */
    private readonly visitorService: VisitorService,
    /**
     * inject queue
     */
    @InjectQueue(JobsEnum.Invoice_Tracking_Code_Notification)
    private readonly queue: Queue,
    /**
     * inject invoiceProductsService
     */
    private readonly invoiceProductsService: InvoiceProductService,
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    /**
     * inject invoiceInvoiceStatusService
     */
    private readonly invoiceInvoiceStatusService: InvoiceInvoiceStatusService,
    /**
     * inject InvoiceHistoryService
     */ private readonly invoiceHistoryService: InvoiceHistoryService
  ) {}

  public async updateInvoiceStatus(
    changeInvoicesStatusInput: ChangeInvoicesStatusInput,
    context: { req: UserContext }
  ): Promise<ChangeInvoicesStatusResponseDto> {
    let { ids, statusId } = changeInvoicesStatusInput;
    const { req } = context;
    const { user } = req;
    let { sub: userId } = user;
    //check user permission
    const userPermissions = await this.authService.getUserPermissions(
      req.user.sub
    );

    const { permissions, roles } = userPermissions;

    //check for statues that user can change
    const statusesToChange = permissionsToChangeInvoiceStatusEnum(permissions);

    if (!statusesToChange.includes(statusId)) {
      return {
        message: `شما اجازه تغییر وضعیت به این صورتحساب را ندارید`,
        status: false,
      };
    }

    const invoiceIds = ids.map((id) => Number(id));
    const queryRunner = this.dataSource.createQueryRunner();
    let comment = '';
    //use typeorm queryRunner
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;
    const invoiceRepository = manager.getRepository(Invoice);
    try {
      const invoices = await invoiceRepository.find({
        where: { id: In(invoiceIds) },
        relations: {
          invoiceAddresses: {
            state: true,
            city: true,
          },
          invoiceProducts: {
            product: true,
            subproduct: {
              product: true,
              basicCarpetSize: true,
            },
          },
          invoicePayments: true,
          visitor: true,
          user: { heardAboutUsOption: true },
        },
      });

      for (const invoice of invoices) {
        if (
          !checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR]) &&
          statusId == InvoiceStatusEnum.CANCEL &&
          invoice.invoicePaymentStatusId !=
            InvoicePaymentStatusEnum.DIGIKALA_ORDERS
        ) {
          await queryRunner.rollbackTransaction();
          return {
            message:
              'کاربر گرامی شما اجازه کنسل کردن صورتحساب‌های غیر از دیجی کالا را ندارید',
            status: false,
          };
        }

        //change invoice status
        const changeResult = await this.changeInvoiceStatus(
          invoice,
          statusId,
          roles,
          permissions,
          comment,
          userId,
          manager
        );

        if (changeResult.status == false) {
          await queryRunner.rollbackTransaction();
          return {
            message: changeResult.message,
            status: false,
          };
        }
        await queryRunner.commitTransaction();
      }
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `:${error}مشکلی در عملیات بوجود امده است`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
    return {
      message: 'صورتحساب با موفقیت تغییر وضعیت داده شد',
      status: true,
    };
  }

  public async changeInvoiceStatus(
    invoice: Invoice,
    status: number,
    roles: string[],
    permissions: string[],
    comment: string = '',
    userId: number,
    manager: EntityManager
  ): Promise<ChangeInvoicesStatusResponseDto> {
    const repository = manager
      ? manager.getRepository(Invoice)
      : this.invoiceRepository;
    const invoiceUser = invoice.user;
    const setting = await this.settingService.findAll();
    const invoiceProducts = invoice.invoiceProducts;
    const invoiceStatusId = invoice.currentInvoiceStatusId;
    //we will update parameters of invoice and then will save it as the updated invoice

    if (invoiceStatusId == InvoiceStatusEnum.DELIVERED) {
      return {
        message: `
        صورتحساب
      ${invoice.invoiceNumber}
      تحویل مشتری شده و امکان تغییر وضعیت وجود ندارد.
      
      }

        `,
        status: false,
      };
    }
    if (
      invoiceStatusId == InvoiceStatusEnum.AWAITING_PROCESS &&
      status > invoiceStatusId &&
      status != InvoiceStatusEnum.CANCEL
    ) {
      if (!invoiceUser.heardAboutUsOptionId) {
        return {
          message: `
                برای مشتری مربوط به صورتحساب
              ${invoice.invoiceNumber}
              نحوه آشنایی مشتری ثبت نشده است
              
              }
        
                `,
          status: false,
        };
      }
    }

    if (
      !checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR]) &&
      invoiceStatusId > status &&
      !READY_TO_SEND_INVOICE_STATUSES.includes(status) &&
      !READY_TO_SEND_INVOICE_STATUSES.includes(invoiceStatusId)
    ) {
      return {
        message: `
                 امکان عقب بردن وضعیت وجود ندارد. لطفا جهت برگرداندن صورتحساب
                ${invoice.invoiceNumber}
               به مرحله قبل با بخش فنی تماس حاصل نمایید
                }
          
                  `,
        status: false,
      };
    }

    if (
      invoice.lockState &&
      invoice.lockState == invoice.currentInvoiceStatusId
    ) {
      return {
        message: 'تغییر وضعیت این سفارش قفل شده است.',
        status: false,
      };
    }

    if (invoice.needsReview) {
      return {
        message: `
                    سفارش شماره
                    ${invoice.invoiceNumber}
                   توسط مشتری دارای تغییرات است و تا زمان بررسی توسط کارشناس مربوطه امکان تغییر وضعیت آن وجود ندارد.
                    }
              
                      `,
        status: false,
      };
    }

    if (
      invoice.invoicePaymentStatusId ==
        InvoicePaymentStatusEnum.TRANSFER_MONEY &&
      !invoice.moneyTransferConfirmed
    ) {
      if (
        !checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR]) ||
        invoiceStatusId != InvoiceStatusEnum.CANCEL
      ) {
        return {
          message:
            'وضعیت سفارشات کارت به کارت تا زمان تایید فیش واریزی مشتری توسط بخش فروش امکان پذیر نمی باشد. ',
          status: false,
        };
      }
    }

    if (invoiceStatusId == InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT) {
      const result =
        this.checkIfCreditableInvoiceAccountingDescriptionEntered(invoice);
      await this.changeInvoiceItemStatusesToExitedFromRepository(
        invoice,
        manager
      );

      if (!result.status) {
        return {
          message: result.message,
          status: false,
        };
      }
    }

    // کنترل صورتحساب های دپو؛ بعد از تکمیل تولید تنها میتواند به حالت "انتقال به انبار دپو" برده شود
    if (
      status == InvoiceStatusEnum.READY_TO_SEND_CHAPAR ||
      status == InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS ||
      status == InvoiceStatusEnum.READY_TO_SEND_MAHEX ||
      status == InvoiceStatusEnum.SENT ||
      status == InvoiceStatusEnum.DELIVERED ||
      status == InvoiceStatusEnum.RETURN_TO_ORIGIN ||
      status == InvoiceStatusEnum.CANCEL
    ) {
      if (
        status == InvoiceStatusEnum.CANCEL &&
        checkUserHasPermission(permissions, [
          InvoicePermissions.PERMISSION_TO_CHANGE_TO_CANCEL,
        ]) &&
        checkUserHasRole(roles, [RolesNameEnum.ADMINISTRATOR])
      ) {
        invoice.isReversible = 0;
      } else if (invoice.isDepot == 1) {
        return {
          message: `
                      صورتحساب 
                      ${invoice.invoiceNumber}
                    برای ورود به انبار دپو ثبت شده است. لطفا پس از تکمیل تولید کالاها، وضعیت آن را به انتقال به انبار دپو تغییر دهید.
                      }
                
                        `,
          status: false,
        };
      } else if (status == InvoiceStatusEnum.ADDED_TO_DEPOT_INVENTORY) {
        if (invoice.isDepot == 0) {
          return {
            message: `
                      صورتحساب 
                      ${invoice.invoiceNumber}
                     برای ورود به انبار دپو ثبت نشده است و امکان انتقال آن به انبار دپو وجود ندارد.
                      }
                
                        `,
            status: false,
          };
        }
      }
    }
    // برای ارجاع صورتحساب به واحد تولید حتما باید تعداد تحویلی از دپو و ارسال به واحد تولید برای هر آیتم صورتحساب تکمیل شده باشد

    if (status == InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT) {
      const result = this.checkIfItemsFromDepotAndToProduceSpecified(invoice);
      if (result.status == false) {
        return {
          message: result.message,
          status: false,
        };
      }
      await this.updateInvoiceProductItemsDepotAndProduce(invoice, manager);
    }

    //todo : check what the Config is
    if (status === InvoiceStatusEnum.READY_TO_SEND_CHAPAR) {
      if (this.configService.get('general.CHAPAR_ACTIVE') == true) {
        const result = await this.shippingService.createShipping(
          invoice,
          ShippingServiceEnum.SHIPPING_SERVICE_CHAPAR_GROUND
        );
      }

      //todo : add mahex shipping if its available

      // if selected invoice status is ready_to_send then call tipax API
    } else if (status == InvoiceStatusEnum.READY_TO_SEND_TIPAX) {
      invoice.trackingCode = '-';
      invoice.isChaparDelivery = 0;
      invoice.selectedShippingServiceId =
        ShippingServiceEnum.SHIPPING_SERVICE_TIPAX;
    } else if (status == InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS) {
      invoice.trackingCode = '-';
      invoice.isChaparDelivery = 0;
      invoice.selectedShippingServiceId =
        ShippingServiceEnum.SHIPPING_SERVICE_MODEMA_EXPRESS;
    }

    // calculate visitors share if the invoice is finalized at our end
    if (
      status == InvoiceStatusEnum.READY_TO_SEND_CHAPAR ||
      status == InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS ||
      status == InvoiceStatusEnum.READY_TO_SEND_MAHEX ||
      status == InvoiceStatusEnum.READY_TO_SEND_TIPAX ||
      status == InvoiceStatusEnum.SENT ||
      status == InvoiceStatusEnum.DELIVERED
    ) {
      const visitorShareCalculated = await this.calulateVisitorShare(invoice);

      if (!visitorShareCalculated) {
        return {
          message:
            'ذخیره سهم بازاریاب از صورتحساب انتخابی با مشکل مواجه شد. لطفا دوباره اطلاعات را ذخیره نمایید و در صورت خطای مجدد با بخش پشتیبانی تماس حاصل نمایید.',
          status: false,
        };
      }
    }

    if (
      status == InvoiceStatusEnum.SENT ||
      status == InvoiceStatusEnum.DELIVERED ||
      status == InvoiceStatusEnum.CANCEL
    ) {
      invoice.isReversible = 0;
    }

    if (status == InvoiceStatusEnum.SENT) {
      invoice.canReturn = 1;
      if (
        invoice.invoicePaymentStatusId &&
        ![
          InvoicePaymentStatusEnum.DIGIKALA_ORDERS,
          InvoicePaymentStatusEnum.BA_SALAM_ORDERS,
        ].includes(invoice.invoicePaymentStatusId)
      ) {
        if (
          invoice.isChaparDelivery == 1 ||
          invoice.selectedShippingServiceId ==
            ShippingServiceEnum.SHIPPING_SERVICE_MAHEX_DOOR_TO_DOOR
        ) {
          await this.queue.add(JobsEnum.Invoice_Tracking_Code_Notification, {
            invoiceId: invoice.id,
          });
        }
      }
    }

    if (status == InvoiceStatusEnum.PREPARING_PRODUCTS) {
      await this.checkAndCreateInvoiceProductItems(
        invoice,
        invoice.user,
        manager
      );
    }

    //todo complete cancel snapp if needed
    if (status == InvoiceStatusEnum.CANCEL) {
      const cancelSnappPaymentResult = await this.checkAndCancelSnappPayment(
        invoice,
        manager
      );
    }

    let invoiceContainsPadsOnly = true;

    for (const invoiceProduct of invoiceProducts) {
      const product = invoiceProduct.product;
      if (product.isCarpetPad == 0) {
        invoiceContainsPadsOnly = false;
        break;
      }
      if (invoiceContainsPadsOnly) {
        invoice.containsPadsOnly = 1;
        if (status == InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT) {
          status = InvoiceStatusEnum.PRODUCTION_COMPLETED;
          comment =
            'تغییر وضعیت فاکتور به تحویل بسته بندی، به دلیل اینکه صورتحساب تنها شامل پد است.';
        }
      }
    }

    // در صورتی که همه چیز به درستی انجام شود، وضعیت انتخابی کاربر پنل در invoices ذخیره شده
    // و همچنین تاریخچه این تغییر وضعیت در جدول invoice_statuses همراه با id کاربر تغییر دهنده وضعیت ذخیره می شود

    invoice.currentInvoiceStatusId = status;
    await repository.save(invoice);
    await this.invoiceInvoiceStatusService.attach(
      invoice.id,
      status,
      userId,
      comment,
      manager
    );
    await this.invoiceHistoryService.saveInvoiceHistory(
      invoice,
      invoice.userId,
      manager
    );
    return {
      message: 'صورتحساب با موفقیت تغییر وضعیت داده شد',
      status: true,
    };
  }

  public checkIfCreditableInvoiceAccountingDescriptionEntered(
    invoice: Invoice
  ) {
    if (
      invoice.invoicePaymentStatusId &&
      ALL_WHOLESALE_PAYMENT_STATUSES.includes(invoice.invoicePaymentStatusId)
    ) {
      if (
        !invoice.wholesaleRemainingMoneyTransferRefCode ||
        invoice.wholesaleRemainingMoneyTransferRefCode == ''
      ) {
        return {
          message:
            'برای تغییر وضعیت فروش های اعتباری عمده و ادامه روند تحویل کالا، بایستی تائیدیه و شماره پیگیری پرداخت مابقی صورتحساب، و توضیحات بخش مالی توسط مسئول این نوع از صورتحساب ها وارد گردد',
          status: false,
        };
      }
    }
    if (invoice.paymentCreditable) {
      if (
        !invoice.accountingDescription ||
        invoice.accountingDescription == ''
      ) {
        return {
          message:
            'برای تغییر وضعیت صورتحساب های اعتباری و ادامه روند تحویل کالا، بایستی تائیدیه و شماره پیگیری پرداخت مابقی صورتحساب، و توضیحات بخش مالی توسط مسئول این نوع از صورتحساب ها وارد گردد',
          status: false,
        };
      }
    }

    return {
      message: 'ok',
      status: true,
    };
  }

  public checkIfItemsFromDepotAndToProduceSpecified(invoice: Invoice) {
    let itemsFromDepotAndToProduceSpecified = true;
    const invoiceProducts = invoice.invoiceProducts;
    for (const invoiceProduct of invoiceProducts) {
      if (invoiceProduct.product.isCarpetPad == 0) {
        if (!invoiceProduct.itemsToProduce || !invoiceProduct.itemsFromDepot) {
          itemsFromDepotAndToProduceSpecified = false;
        } else if (
          invoiceProduct.itemsToProduce == 0 &&
          invoiceProduct.itemsFromDepot == 0
        ) {
          itemsFromDepotAndToProduceSpecified = false;
        }
      }
    }
    if (!itemsFromDepotAndToProduceSpecified) {
      return {
        message: `
                 تعداد آیتم های صورتحساب
                  ${invoice.invoiceNumber}
                 که باید تولید شوند و تعدادی که باید از انبار دپو ارسال شوند مشخص نشده است. لطفا جهت ارجاع به واحد تولید این تعدادها را برای هر آیتم صورتحساب مشخص نمایید
                  }
                    `,
        status: false,
      };
    }
    return {
      message: 'ok',
      status: true,
    };
  }

  public async changeInvoiceItemStatusesToExitedFromRepository(
    invoice: Invoice,
    manager?: EntityManager
  ) {
    const invoiceProducts = invoice.invoiceProducts;
    const user = invoice.user;
    const comment =
      'انتقال ایتم به مرحله "خروج از انبار گردید" به دلیل اینکه از انبار خارج شده و به مرحله بسته بندی رفته است';

    for (const invoiceProduct of invoiceProducts) {
      const invoiceProductItems = invoiceProduct.invoiceProductItems;

      for (const invoiceProductItem of invoiceProductItems) {
        const currentStatusId = invoiceProductItem.currentStatusId;
        const invoiceProductItemId = invoiceProductItem.id;
        invoiceProductItem.currentStatusId =
          InvoiceProductStatusEnum.EXITED_FROM_REPOSITORY;
        try {
          // await this.invoiceProductItemService.updateCurrentStatusId(
          //   invoiceProductItem,
          //   InvoiceProductStatusEnum.EXITED_FROM_REPOSITORY,
          //   manager
          // );
          await this.invoiceProductItemService.save(
            invoiceProductItem,
            manager
          );

          //todo:double check the attach functionality
          await this.invoiceProductItemInvoiceProductStatusService.attach(
            invoiceProductItemId,
            currentStatusId,
            user.id,
            comment,
            manager
          );
        } catch (error) {
          throw new Error(`مشکلی در تغییر وضعیت ایتم بوجود امده است: ${error}`);
        }
      }
    }
  }

  public async updateInvoiceProductItemsDepotAndProduce(
    invoice: Invoice,
    manager: EntityManager
  ) {
    const invoiceProducts = invoice.invoiceProducts;
    const user = invoice.user;
    const comment =
      'انتقال ایتم به مرحله "تحویل انبار گردید" به دلیل اینکه باید از دپو بیایند و چاپ تگ آن صورت بگیرد';
    for (const invoiceProduct of invoiceProducts) {
      const invoiceProductItems = invoiceProduct.invoiceProductItems;
      const itemsToProduce = invoiceProduct.itemsToProduce || 0;
      const itemsFromDepot = invoiceProduct.itemsFromDepot;

      const invoiceProductItemsToProduce =
        await this.invoiceProductItemService.findAll({
          where: { id: invoiceProduct.id, fromDepot: IsNull() },
          take: itemsToProduce,
        });

      for (const invoiceProductItem of invoiceProductItemsToProduce) {
        let updatedInvoiceProductItem = invoiceProductItem;
        updatedInvoiceProductItem.fromDepot = 0;
        updatedInvoiceProductItem.currentStatusId =
          InvoiceProductStatusEnum.BEGIN_PRODUCTION;
        updatedInvoiceProductItem.isTagPrinted = 1;
        await this.invoiceProductItemService.save(
          updatedInvoiceProductItem,
          manager
        );
      }

      const invoiceProductItemsFromDepot =
        await this.invoiceProductItemService.findAll({
          where: { id: invoiceProduct.id, fromDepot: IsNull() },
          take: itemsToProduce,
        });

      for (const invoiceProductItem of invoiceProductItemsFromDepot) {
        let updatedInvoiceProductItem = invoiceProductItem;
        updatedInvoiceProductItem.fromDepot = 0;
        updatedInvoiceProductItem.currentStatusId =
          InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT;
        updatedInvoiceProductItem.isTagPrinted = 1;
        await this.invoiceProductItemInvoiceProductStatusService.attach(
          invoiceProductItem.id,
          invoiceProductItem.currentStatusId,
          user.id,
          comment,
          manager
        );
        await this.invoiceProductItemService.save(
          updatedInvoiceProductItem,
          manager
        );
      }
    }
  }

  public async calulateVisitorShare(invoice: Invoice, manager?: EntityManager) {
    const visitorShareCalculated = invoice.visitorShareCalculated;
    const visitorCouponId = invoice.visitorCouponId;
    const partner_code = invoice.partnerCode;
    const totalVisitorShare = invoice.totalVisitorShare || 0;
    const visitor = invoice.visitor;
    if ((visitorCouponId || partner_code) && !visitorShareCalculated) {
      visitor.balance && (visitor.balance += totalVisitorShare);

      const visitorSaveResponse = await this.visitorService.save(
        visitor,
        manager
      );

      if (visitorSaveResponse) {
        invoice.visitorShareCalculated = 1;
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  public async checkAndCreateInvoiceProductItems(
    invoice: Invoice,
    user: User,
    manager: EntityManager
  ) {
    const invoiceProducts = invoice.invoiceProducts;
    for (const invoiceProduct of invoiceProducts) {
      const Subproduct = invoiceProduct.subproduct;
      const product = Subproduct.product;
      let row = 1;
      if (product.isCarpetPad == 0) {
        if (invoiceProduct.invoiceProductItemsCreated == 0) {
          if (invoiceProduct.itemsToProduce) {
            for (; row <= invoiceProduct.itemsToProduce; row++) {
              const invoiceProductItem = new InvoiceProductItem();
              invoiceProductItem.row = row;
              invoiceProductItem.invoiceProductId = invoiceProduct.id;
              invoiceProductItem.currentStatusId =
                InvoiceProductStatusEnum.BEGIN_PRODUCTION;
              invoiceProductItem.code = `${invoice.invoiceNumber}_${Subproduct.id}_${row}`;
              await this.invoiceProductItemService.save(
                invoiceProductItem,
                manager
              );
              await this.invoiceProductItemInvoiceProductStatusService.attach(
                invoiceProductItem.id,
                invoiceProductItem.currentStatusId,
                user.id,
                null,
                manager
              );
            }
          }
          invoiceProduct.invoiceProductItemsCreated = 1;
          await this.invoiceProductsService.save(invoiceProduct, manager);
        }
        const otherSameInvoiceProduct = invoice.invoiceProducts.find(
          (invoiceProductInner) =>
            invoiceProductInner.id != invoiceProduct.id &&
            invoiceProductInner.subproductId == invoiceProduct.subproductId
        );

        if (
          otherSameInvoiceProduct &&
          otherSameInvoiceProduct.invoiceProductItemsCreated == 0
        ) {
          const lastRowPlusOne = row;
          for (
            ;
            row <
            lastRowPlusOne + (otherSameInvoiceProduct.itemsToProduce || 0);
            row++
          ) {
            const invoiceProductItem = new InvoiceProductItem();
            invoiceProductItem.row = row;
            invoiceProductItem.invoiceProductId = otherSameInvoiceProduct.id;
            invoiceProductItem.currentStatusId =
              InvoiceProductStatusEnum.BEGIN_PRODUCTION;
            invoiceProductItem.code = `${invoice.invoiceNumber}_${Subproduct.id}_${row}`;
            await this.invoiceProductItemService.save(
              invoiceProductItem,
              manager
            );

            await this.invoiceProductItemInvoiceProductStatusService.attach(
              invoiceProductItem.id,
              invoiceProductItem.currentStatusId,
              user.id,
              null,
              manager
            );
          }
          otherSameInvoiceProduct.invoiceProductItemsCreated = 1;
          await this.invoiceProductsService.save(
            otherSameInvoiceProduct,
            manager
          );
        }
      }
    }
    return true;
  }

  public async checkAndCancelSnappPayment(
    invoice: Invoice,
    manager: EntityManager
  ) {}
}
