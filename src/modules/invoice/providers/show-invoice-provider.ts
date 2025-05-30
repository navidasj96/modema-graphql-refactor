import { Injectable } from '@nestjs/common';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { AuthService } from '@/modules/auth/auth.service';
import { checkUserHasPermission } from '@/utils/helpers';
import { CouponPermissions, DiscountPermissions } from '@/utils/permissions';
import { SettingService } from '@/modules/setting/setting.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { ShowInvoiceInputDto } from '@/modules/invoice/dto/show-invoice.input.dto';

@Injectable()
export class ShowInvoiceProvider {
  constructor(
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {}

  async showInvoice(
    showInvoiceInputDto: ShowInvoiceInputDto,
    context: { req: UserContext }
  ) {
    const { invoiceId } = showInvoiceInputDto;
    const { req } = context;
    const { user } = req;
    const { sub: userId } = user;
    //check user permission
    const userPermissions = await this.authService.getUserPermissions(
      req.user.sub
    );
    console.log('invoiceId', invoiceId);
    const { permissions, roles } = userPermissions;
    const hasPermissionToCoupon = checkUserHasPermission(permissions, [
      CouponPermissions.PERMISSION_TO_CHANGE,
    ]);
    const hasPermissionToDiscount = checkUserHasPermission(permissions, [
      DiscountPermissions.PERMISSION_TO_CHANGE,
    ]);

    const settings = await this.settingService.activeSetting();

    const invoice = await this.invoiceRepository.findOne({
      where: {
        id: invoiceId,
        currentInvoiceStatusId: MoreThanOrEqual(
          InvoiceStatusEnum.AWAITING_PROCESS
        ),
      },
      relations: {
        invoiceInvoiceStatuses: { invoiceStatus: true },
        // invoiceProducts: {
        //   product: {
        //     productProductCategories: { productCategory: true },
        //     subproducts: {
        //       discountSubjects: { discount: true },
        //     },
        //     image: true,
        //     labelProducts: { label: true },
        //     discountSubjects: true,
        //   },
        //   subproduct: {
        //     discountSubjects: { discount: true },
        //     image: true,
        //     basicCarpetSize: true,
        //     basicCarpetColor: true,
        //     basicCarpetDesigner: true,
        //   },
        //   design: true,
        //   carpetUsagePlaceInvoiceProducts: {
        //     carpetUsagePlace: true,
        //   },
        // },
        // invoiceAddresses: {
        //   city: true,
        //   country: true,
        //   state: true,
        // },
        // user: true,
        // invoicePayments: true,
        // invoicePaymentStatus: true,
        // invoiceNegotiations: { negotiation: true },
      },
    });
    console.log('invoice', invoice);
    return invoice;
  }
}
