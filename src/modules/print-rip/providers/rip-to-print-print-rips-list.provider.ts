import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { INVOICE_PRODUCT_STATUSES_HEAT_AND_AFTER } from '@/utils/invoice-product-status';
import { PrintRipPermissions } from '@/utils/permissions';
import { AuthenticationError } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RipToPrintPrintRipsListProvider {
  constructor(
    /**
     * inject printRipRepository
     */
    @InjectRepository(PrintRip)
    private readonly printRipRepository: Repository<PrintRip>,
    /**
     * inject authService
     */
    private readonly authService: AuthService
  ) {}

  async ripToPrintPrintRipsList(context: { req: UserContext }) {
    const userHasPermissionToViewPrintRips =
      await this.authService.userPermissionCheck(
        [PrintRipPermissions.PERMISSION_TO_VIEW],
        context
      );

    if (!userHasPermissionToViewPrintRips) {
      throw new AuthenticationError('دسترسی به پرینت ریپ ندارید');
    }

    const printRips = await this.printRipRepository
      .createQueryBuilder('pr')
      .select(['pr'])
      .leftJoin(
        'invoice_product_items',
        'ipi',
        'ipi.printRipId =pr.id AND ipi.currentStatusId IN (:...statuses)',
        {
          statuses: INVOICE_PRODUCT_STATUSES_HEAT_AND_AFTER,
        }
      )
      .where('ipi.id IS NULL')
      .groupBy('pr.id')
      .orderBy('pr.createdAt', 'DESC')
      .getMany();

    return printRips;
  }
}
