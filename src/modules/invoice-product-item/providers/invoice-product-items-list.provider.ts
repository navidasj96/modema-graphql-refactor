import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemsListInput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { ViewableInvoiceProductItemStatusesForUserProvider } from '@/modules/invoice-product-item/providers/viewable-invoice-product-item-statues-for-user';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class InvoiceProductItemsListProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,

    /**
     * inject viewableInvoiceProductItemStatusesForUserProvider
     */
    private readonly viewableInvoiceProductItemStatusesForUserProvider: ViewableInvoiceProductItemStatusesForUserProvider
  ) {}

  async invoiceProductItemsList(
    context: {
      req: UserContext;
    },
    invoiceProductItemsListInput: InvoiceProductItemsListInput
  ) {
    const {
      limit,
      offset,
      isShaggy,
      rollReferenceCode,
      search,
      status,
      hideDepot,
      sort,
    } = invoiceProductItemsListInput;
    const { user } = context.req;
    const { sub: userId } = user;

    const statusesToView =
      await this.viewableInvoiceProductItemStatusesForUserProvider.viewableInvoiceProductItemStatusesForUser(
        userId,
        isShaggy
      );

    const invoiceProductItemsQuery = this.invoiceProductItemRepository
      .createQueryBuilder('ipi')

      .innerJoinAndSelect('ipi.invoiceProduct', 'ip')
      .innerJoinAndSelect('ipi.currentStatus', 'currentStatus')
      .innerJoinAndSelect('ip.invoice', 'inv')
      .innerJoinAndSelect('inv.invoiceAddresses', 'addr')
      .innerJoinAndSelect('ip.product', 'prod')
      .innerJoinAndSelect('ip.subproduct', 'subprod')
      .innerJoinAndSelect('subprod.basicCarpetSize', 'bcs')
      .innerJoinAndSelect('subprod.basicCarpetColor', 'bcc')
      .innerJoinAndSelect(
        'ipi.invoiceProductItemInvoiceProductStatuses',
        'ipis'
      )
      .innerJoinAndSelect('ipis.invoiceProductStatus', 'status')
      .leftJoinAndSelect('ipi.printProfile', 'profile')
      .leftJoinAndSelect('ipi.productionRoll', 'productionRoll')
      .leftJoinAndSelect('ipi.printRip', 'printRip')
      .where('inv.currentInvoiceStatusId IN (:...invoiceStatuses)', {
        invoiceStatuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
      })
      .andWhere('prod.isShaggy = :isShaggy', { isShaggy: isShaggy ? 1 : 0 })
      .skip(offset)
      .take(limit);

    if (status === 0 || !status) {
      invoiceProductItemsQuery.andWhere(
        'ipi.currentStatusId IN (:...statusesToView)',
        {
          statusesToView,
        }
      );
    } else {
      invoiceProductItemsQuery
        .andWhere('ipi.currentStatusId IN (:...statusesToView)', {
          statusesToView,
        })
        .andWhere('ipi.currentStatusId = :status', {
          status,
        });
    }

    if (search) {
      const like = `%${search}%`;
      invoiceProductItemsQuery.andWhere(
        new Brackets((qb) => {
          qb.where('inv.invoiceNumber LIKE :like', { like })
            .orWhere('ipi.code LIKE :like', { like })
            .orWhere('productionRoll.rollNumber LIKE :like', { like })
            .orWhere('addr.fullname LIKE :like', { like })
            .orWhere('status.status LIKE :like', { like })
            .orWhere('prod.name LIKE :like', { like })
            .orWhere('bcs.title LIKE :like', { like })
            .orWhere('bcc.title LIKE :like', { like })
            .orWhere('bcs.code LIKE :like', { like })
            .orWhere('bcc.code LIKE :like', { like })
            .orWhere('profile.versionNo LIKE :like', { like })
            .orWhere('printRip.ripNumber LIKE :like', { like });
        })
      );
    }

    if (rollReferenceCode) {
      const like = `%${rollReferenceCode}%`;
      invoiceProductItemsQuery.andWhere(
        'productionRoll.rollNumber LIKE :like',
        {
          like,
        }
      );
    }

    if (hideDepot) {
      invoiceProductItemsQuery.andWhere('inv.isDepot = :isDepot', {
        isDepot: 0,
      });
    }

    if (!sort) {
      //default
      invoiceProductItemsQuery.orderBy('inv.invoiceNumber', 'DESC');
    } else {
      //possible sort fields
      const sortMap: Record<string, { column: string; alias: string }> = {
        name: { column: 'addr.fullname', alias: 'addr.fullname' },
        invoiceNumber: {
          column: 'inv.invoiceNumber',
          alias: 'inv.invoiceNumber',
        },
        productName: { column: 'prod.name', alias: 'prod.name' },
        currentStatus: { column: 'status.status', alias: 'status.status' },
        predictedDateForReceivedByRepository: {
          column: 'ipi.predictedDateForReceivedByRepository',
          alias: 'ipi.predictedDateForReceivedByRepository',
        },
        code: { column: 'ipi.code', alias: 'ipi.code' },
        rollReferenceCode: {
          column: 'productionRoll.rollNumber',
          alias: 'productionRoll.rollNumber',
        },
        printRip: { column: 'printRip.ripNumber', alias: 'printRip.ripNumber' },
        versionNo: { column: 'profile.versionNo', alias: 'profile.versionNo' },
      };

      const { field, order } = sort;
      const sortDef = sortMap[field];
      if (sortDef && ['ASC', 'DESC'].includes(order.toUpperCase())) {
        invoiceProductItemsQuery.orderBy(
          sortDef.column,
          order.toUpperCase() as 'ASC' | 'DESC'
        );
      }
    }
    const [invoiceProductItems, totalCount] =
      await invoiceProductItemsQuery.getManyAndCount();

    return { invoiceProductItems, totalCount };
  }
}
