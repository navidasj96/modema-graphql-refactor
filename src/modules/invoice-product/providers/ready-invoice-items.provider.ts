import { ReadyInvoiceProductItemTs } from '@/modules/invoice-product/dto/ready-invoice-product-item';
import { ReadyInvoiceProductItemsListInput } from '@/modules/invoice-product/dto/ready-invoice-product-items-list.input';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { InvoiceService } from '@/modules/invoice/invoice.service';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { InvoiceTypeEnum } from '@/utils/invoice-type.enum';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class ReadyInvoiceProductProvider {
  constructor(
    @InjectRepository(InvoiceProduct)
    private readonly invoiceProductRepository: Repository<InvoiceProduct>,
    /**
     * inject invoiceService
     */
    @Inject(forwardRef(() => InvoiceService))
    private readonly invoiceService: InvoiceService
  ) {}

  async itemsList(
    readyInvoiceProductItemsListInput: ReadyInvoiceProductItemsListInput
  ) {
    const { fromDate, toDate, search, limit, offset } =
      readyInvoiceProductItemsListInput;

    const totalInvoiceProductQuery = this.invoiceProductRepository
      .createQueryBuilder('invoiceProduct')

      // ✅ Distinct instead of groupBy
      .distinct(true)

      // ✅ INNER JOINS
      .innerJoinAndSelect('invoiceProduct.invoice', 'invoice')
      .innerJoinAndSelect('invoice.invoiceAddresses', 'invoiceAddress')
      .innerJoinAndSelect('invoiceProduct.product', 'product')
      .innerJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .innerJoinAndSelect('subproduct.basicCarpetColor', 'basicCarpetColor')
      .innerJoinAndSelect('subproduct.basicCarpetSize', 'basicCarpetSize')

      // ✅ LEFT JOIN with custom ON condition
      .leftJoin(
        'invoice.invoiceInvoiceStatuses',
        'invoiceStatusProductionCompleted',
        'invoiceStatusProductionCompleted.invoiceStatusId = :completedStatus',
        { completedStatus: InvoiceStatusEnum.PRODUCTION_COMPLETED }
      )

      // ✅ WHERE conditions
      .where('invoice.currentInvoiceStatusId = :currentStatus', {
        currentStatus: InvoiceStatusEnum.PRODUCTION_COMPLETED,
      })
      .andWhere('product.isCarpetPad = :isCarpetPad', { isCarpetPad: 0 })
      .andWhere(
        new Brackets((qb) => {
          qb.where('invoice.invoiceTypeId <> :depotType', {
            depotType: InvoiceTypeEnum.FOR_DEPOT,
          }).orWhere('invoice.invoiceTypeId IS NULL');
        })
      )

      // ✅ ORDER & PAGINATION

      .orderBy('invoice.issueDate', 'DESC')
      .skip(offset)
      .take(limit);

    if (fromDate) {
      totalInvoiceProductQuery.andWhere('invoice.issueDate >= :fromDate', {
        fromDate,
      });
    }
    if (toDate) {
      totalInvoiceProductQuery.andWhere('invoice.issueDate <= :toDate', {
        toDate,
      });
    }

    if (search) {
      totalInvoiceProductQuery.andWhere(
        new Brackets((qb) => {
          qb.where('invoice.invoiceNumber LIKE :search', {
            search: `%${search}%`,
          })
            .orWhere('invoiceAddress.fullname LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('invoice.issueDate LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('product.name LIKE :search', { search: `%${search}%` })
            .orWhere('subproduct.code LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('basicCarpetSize.title LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('basicCarpetColor.title LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('basicCarpetSize.code LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('basicCarpetColor.code LIKE :search', {
              search: `%${search}%`,
            });
        })
      );
    }

    const [itemInvoiceProducts, total] =
      await totalInvoiceProductQuery.getManyAndCount();
    const readyInvoiceProductItems: ReadyInvoiceProductItemTs[] = [];

    for (const itemInvoiceProduct of itemInvoiceProducts) {
      const otherInvoiceProducts = await this.invoiceProductRepository
        .createQueryBuilder('invoiceProduct')
        .innerJoinAndSelect('invoiceProduct.invoice', 'invoice')
        .innerJoinAndSelect('invoiceProduct.product', 'product')
        .innerJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
        .where('invoice.currentInvoiceStatusId = :currentStatus', {
          currentStatus: InvoiceStatusEnum.PRODUCTION_COMPLETED,
        })
        .andWhere('invoiceProduct.invoiceId = :invoiceId', {
          invoiceId: itemInvoiceProduct.invoiceId,
        })
        .getMany();

      const cntSizes: Record<number, number> = {};
      const cntSizesPad: Record<number, number> = {};
      let withPadText = '';

      for (const otherInvoiceProduct of otherInvoiceProducts) {
        const otherProduct = otherInvoiceProduct.product;
        const otherSubproduct = otherInvoiceProduct.subproduct;

        if (!otherProduct.isCarpetPad) {
          const sizeId = otherSubproduct.basicCarpetSizeId;
          if (sizeId && !cntSizes[sizeId]) {
            cntSizes[sizeId] = 0;
          } else if (sizeId) {
            cntSizes[sizeId] += otherInvoiceProduct.count;
          }
        }
      }

      for (const otherInvoiceProduct of otherInvoiceProducts) {
        const otherProduct = otherInvoiceProduct.product;
        const otherSubproduct = otherInvoiceProduct.subproduct;

        if (otherProduct.isCarpetPad) {
          const sizeId = otherSubproduct.basicCarpetSizeId;
          if (sizeId && !cntSizesPad[sizeId]) {
            cntSizesPad[sizeId] = 0;
          } else if (sizeId) {
            cntSizesPad[sizeId] += otherInvoiceProduct.count;
          }
        }
      }

      for (const [sizeId, cntSize] of Object.entries(cntSizes)) {
        for (const [sizeIdPad, cntSizePad] of Object.entries(cntSizesPad)) {
          if (Number(sizeId) === Number(sizeIdPad) && cntSize !== cntSizePad) {
            withPadText += ' (نیاز به بررسی پدهای زیرین) ';
          }
        }
      }

      readyInvoiceProductItems.push({ ...itemInvoiceProduct, withPadText });
    }
    return {
      itemInvoiceProducts: readyInvoiceProductItems,
      totalCount: total,
    };
  }
}
