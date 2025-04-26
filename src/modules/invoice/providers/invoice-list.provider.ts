import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { permissionToViewInvoice } from '@/modules/user/helpers/permission-to-view-invoice';
import { permissionsToChangeInvoiceStatus } from '@/modules/user/helpers/permission-to-change-invoice-status';
import { InvoiceStatus } from '@/utils/invoice-status';
import { In, Repository } from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoicePaymentType } from '@/utils/invoice-payment-type';
import { log } from 'console';

@Injectable()
export class InvoiceListProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
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

    const invoices = await this.invoiceRepository
      .createQueryBuilder('invoices')
      .select('invoices.*')
      .addSelect('invoices.id', 'id_for_sub')
      .addSelect(
        `
    (SELECT SUM(invoice_payments.amount)
     FROM invoice_payments
     WHERE invoice_payments.invoice_id = invoices.id
       AND invoice_payments.is_confirmed = 1
       AND invoice_payments.for_shipping = 0
       AND invoice_payments.invoice_payment_type_id != :walletPaymentType
    )`,
        'total_paid'
      )
      .addSelect(
        `
    CASE
      WHEN invoices.cash_on_delivery = 0 THEN
        CASE
          WHEN invoices.free_delivery = 1 THEN invoices.total_price
          ELSE invoices.total_price - invoices.shipping_rate
        END
      ELSE
        CASE
          WHEN invoices.free_delivery = 1 AND invoices.paid_cod_shipping_rate = 0 THEN invoices.total_price
          ELSE invoices.total_price - invoices.shipping_rate_cod
        END
    END
  `,
        'net_income'
      )
      .addSelect(
        `
    CASE
      WHEN invoices.selected_shipping_service_id = 0 THEN 'By Modema'
      ELSE shipping_services.name
    END
  `,
        'selected_shipping_service_name'
      )
      .addSelect(
        'invoice_invoice_status_referred.created_at',
        'invoice_status_referred_date'
      )
      .addSelect(
        'invoice_invoice_status_sent.created_at',
        'invoice_status_sent_date'
      )
      .addSelect('returned_invoices.id', 'replacement_invoice_id')
      .innerJoin('users', 'users', 'invoices.user_id = users.id')
      .innerJoin(
        'invoice_addresses',
        'invoice_addresses',
        'invoices.id = invoice_addresses.invoice_id'
      )
      .innerJoin(
        'countries',
        'countries',
        'invoice_addresses.country_id = countries.id'
      )
      .innerJoin('states', 'states', 'invoice_addresses.state_id = states.id')
      .innerJoin('cities', 'cities', 'invoice_addresses.city_id = cities.id')
      .innerJoin(
        'invoice_products',
        'invoice_products',
        'invoices.id = invoice_products.invoice_id'
      )
      .innerJoin(
        'products',
        'products',
        'invoice_products.product_id = products.id'
      )
      .innerJoin(
        'subproducts',
        'subproducts',
        'invoice_products.subproduct_id = subproducts.id'
      )
      .leftJoin(
        'basic_carpet_sizes',
        'basic_carpet_sizes',
        'subproducts.basic_carpet_size_id = basic_carpet_sizes.id'
      )
      .leftJoin(
        'basic_carpet_colors',
        'basic_carpet_colors',
        'subproducts.basic_carpet_color_id = basic_carpet_colors.id'
      )
      .leftJoin(
        'invoice_invoice_status',
        'invoice_invoice_status',
        `
    invoice_invoice_status.invoice_id = invoices.id
    AND invoice_invoice_status.invoice_status_id = invoices.current_invoice_status_id
    AND invoice_invoice_status.id = (
      SELECT MAX(iis.id)
      FROM invoice_invoice_status iis
      WHERE iis.invoice_id = invoices.id
    )
  `
      )
      .leftJoin(
        'invoice_statuses',
        'invoice_statuses',
        'invoices.current_invoice_status_id = invoice_statuses.id'
      )
      .leftJoin(
        'invoice_invoice_status',
        'invoice_invoice_status_referred',
        `
    invoice_invoice_status_referred.invoice_id = invoices.id
    AND invoice_invoice_status_referred.invoice_status_id = :referredStatus
  `,
        {
          referredStatus:
            InvoiceStatus.INVOICE_STATUS_REFERRED_TO_PRODUCTION_DEPARTMENT,
        }
      )
      .leftJoin(
        'invoice_invoice_status',
        'invoice_invoice_status_sent',
        `
    invoice_invoice_status_sent.invoice_id = invoices.id
    AND invoice_invoice_status_sent.invoice_status_id = :sentStatus
  `,
        { sentStatus: InvoiceStatus.INVOICE_STATUS_SENT }
      )
      .leftJoin(
        'invoice_statuses',
        'invoice_statuses_referred',
        'invoice_invoice_status_referred.invoice_status_id = invoice_statuses_referred.id'
      )
      .leftJoin(
        'invoice_statuses',
        'invoice_statuses_sent',
        'invoice_invoice_status_sent.invoice_status_id = invoice_statuses_sent.id'
      )
      .innerJoin(
        'invoice_payment_statuses',
        'invoice_payment_statuses',
        'invoices.invoice_payment_status_id = invoice_payment_statuses.id'
      )
      .leftJoin(
        'shipping_services',
        'shipping_services',
        'invoices.selected_shipping_service_id = shipping_services.id'
      )
      .leftJoin(
        'returned_invoices',
        'returned_invoices',
        'invoices.id = returned_invoices.replacement_invoice_id'
      )
      .where('invoices.current_invoice_status_id IN (:...statusesToView)', {
        statusesToView,
      })
      .groupBy(
        `
    invoices.id,
    shipping_services.name,
    invoice_invoice_status_referred.created_at,
    invoice_invoice_status_sent.created_at,
    returned_invoices.id
  `
      )
      .skip(0) // Pagination: Skip records
      .take(100) // Pagination: Limit records
      .setParameters({
        walletPaymentType: InvoicePaymentType.INVOICE_PAYMENT_TYPE_BY_WALLET,
      })
      .getRawMany();

    console.log('invoices', invoices);
    console.log('statusesToView', statusesToView);

    return true;
  }
}
