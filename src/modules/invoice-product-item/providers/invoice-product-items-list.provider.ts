import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductItemsListInput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.input';
import { Injectable } from '@nestjs/common';
import { Brackets, DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  INVOICE_STATUSES_AFTER_PRODUCTION_START,
  InvoiceStatusEnum,
} from '@/utils/invoice-status';
import { ViewableInvoiceProductItemStatusesForUserProvider } from '@/modules/invoice-product-item/providers/viewable-invoice-product-item-statues-for-user';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemsListOutput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.output';

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
      .select(['ipi'])
      .innerJoin('ipi.invoiceProduct', 'ip')
      .innerJoin('ip.invoice', 'inv')
      .innerJoin('inv.invoiceAddresses', 'addr')
      .innerJoin('ip.product', 'prod')
      .innerJoin('ip.subproduct', 'subprod')
      .innerJoin('subprod.basicCarpetSize', 'bcs')
      .innerJoin('subprod.basicCarpetColor', 'bcc')
      .innerJoin('ipi.invoiceProductItemInvoiceProductStatuses', 'ipis')
      .innerJoin('ipis.invoiceProductStatus', 'status')
      .leftJoin('ipi.printProfile', 'profile')
      .leftJoin('ipi.productionRoll', 'productionRoll')
      .leftJoin('ipi.printRip', 'printRip')
      .where('inv.currentInvoiceStatusId IN (:...invoiceStatuses)', {
        invoiceStatuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
      })
      .andWhere('prod.isShaggy = :isShaggy', { isShaggy: isShaggy ? 1 : 0 })
      .groupBy('ipi.id')
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
      invoiceProductItemsQuery.andWhere('inv.depotId :isDepot', {
        isDepot: 0,
      });
    }

    if (!sort) {
      //default
      invoiceProductItemsQuery
        .addSelect('inv.invoiceNumber')
        .orderBy('inv.invoiceNumber', 'DESC');
    } else {
      //possible sort fields
      const sortMap: Record<string, { column: string; alias: string }> = {
        name: { column: 'prod.name', alias: 'prod.name' },
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
      console.log('sort', sort);
      const sortDef = sortMap[field];
      if (sortDef && ['ASC', 'DESC'].includes(order.toUpperCase())) {
        invoiceProductItemsQuery
          .addSelect(sortDef.column)
          .orderBy(sortDef.column, order.toUpperCase() as 'ASC' | 'DESC');
      }
    }
    const [invoiceProductItems, totalCount] =
      await invoiceProductItemsQuery.getManyAndCount();

    return { invoiceProductItems, totalCount };
  }
}
