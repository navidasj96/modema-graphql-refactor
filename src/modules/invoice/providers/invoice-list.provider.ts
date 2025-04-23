import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { permissionToViewInvoice } from '@/modules/user/helpers/permission-to-view-invoice';
import { permissionsToChangeInvoiceStatus } from '@/modules/user/helpers/permission-to-change-invoice-status';
import { InvoiceStatus } from '@/utils/invoice-status';
import { In, Repository } from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceListProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  public async invoiceList(context: { req: UserContext }) {
    //get user permission
    const userPermissions = context.req.user.permissions;
    const userRoles = context.req.user.roles;

    if (!userPermissions || !userRoles) {
      throw new UnauthorizedException('permission denied');
    }

    let status = -1;

    if (!status) {
      status = InvoiceStatus.INVOICE_STATUS_AWAITING_PROCESS;
      if (userRoles?.includes('administrator')) {
        status = 0;
      }
    }

    const statusesToView = permissionToViewInvoice(userPermissions);
    const $statusesToChange = permissionsToChangeInvoiceStatus(userPermissions);

    //get invoice list
    const invoicesCount = await this.invoiceRepository.find({
      where: { currentInvoiceStatusId: In(statusesToView) },
    });

    console.log('$invoicesCount', invoicesCount);
    return true;
  }
}
