import { InvoiceItemReplaceUpdateInput } from '@/modules/invoice-product-item/dto/invoice-item-replace-update.input';
import { SearchInvoiceProductItemForReplacementListInput } from '@/modules/invoice-product-item/dto/search-invoice-product-item-for-replacement-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { addCountryCodeToPhoneNumber } from '@/utils/helpers';
import {
  INVOICE_STATUSES_AFTER_PRODUCTION_START,
  INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES,
} from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, DataSource, Repository } from 'typeorm';

@Injectable()
export class InvoiceItemReplaceProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource
  ) {}

  async searchInvoiceProductItemForReplacementList(
    searchInvoiceProductItemForReplacementListInput: SearchInvoiceProductItemForReplacementListInput
  ) {
    const { search } = searchInvoiceProductItemForReplacementListInput;

    const query = this.invoiceProductItemRepository
      .createQueryBuilder('invoiceProductItem')
      .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('invoiceProduct.product', 'product')
      .innerJoin('product.subproducts', 'subproducts')
      .innerJoin('subproducts.basicCarpetColor', 'basicCarpetColor')
      .innerJoin('invoice.user', 'user')
      .where('invoice.currentInvoiceStatusId IN (:...invoiceStatuses)', {
        invoiceStatuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
      })
      .andWhere(
        'invoice.currentInvoiceStatusId NOT IN (:...packagingStatuses)',
        {
          packagingStatuses: INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES,
        }
      )
      .andWhere('product.isCarpetPad = :isCarpetPad', { isCarpetPad: 0 })
      .andWhere('product.isShaggy = :isShaggy', { isShaggy: 0 });

    if (search) {
      query.andWhere(
        new Brackets((qb) => {
          qb.where('user.name LIKE :search', { search: `%${search}%` })
            .orWhere('user.phone LIKE :search', { search: `%${search}%` })
            .orWhere('user.phone LIKE :searchWithCountryCode', {
              searchWithCountryCode: `%${addCountryCodeToPhoneNumber(search)}%`,
            })
            .orWhere('invoice.invoiceNumber LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('invoiceProductItem.code LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('product.name LIKE :search', { search: `%${search}%` })
            .orWhere('subproducts.searchName LIKE :search', {
              search: `%${search}%`,
            })
            .orWhere('basicCarpetColor.title LIKE :search', {
              search: `%${search}%`,
            });
        })
      );
    }
    const invoiceProductItems = await query.take(10).getMany();
    return invoiceProductItems;
  }

  async update(invoiceItemReplaceUpdateInput: InvoiceItemReplaceUpdateInput) {
    const { replaceFromId, replaceToId } = invoiceItemReplaceUpdateInput;

    const invoiceItemFrom = await this.invoiceProductItemRepository.findOne({
      where: { id: replaceFromId },
      relations: {
        invoiceProductItemInvoiceProductStatuses: {
          invoiceProductStatus: true,
        },
        invoiceProduct: {
          product: true,
          subproduct: true,
          invoice: { user: true },
        },
      },
    });

    const invoiceItemTo = await this.invoiceProductItemRepository.findOne({
      where: { id: replaceToId },
      relations: {
        invoiceProductItemInvoiceProductStatuses: {
          invoiceProductStatus: true,
        },
        invoiceProduct: {
          product: true,
          subproduct: true,
          invoice: { user: true },
        },
      },
    });

    if (!invoiceItemFrom || !invoiceItemTo) {
      throw new Error('آیتم‌ برای جابجایی انتخاب نشده است');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const invoiceProductItemRepository =
      manager.getRepository(InvoiceProductItem);

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const fromStatus = invoiceItemFrom.currentStatusId;
      const toStatusId = invoiceItemTo.currentStatusId;
      const subproductFrom = invoiceItemFrom.invoiceProduct.subproduct;
      const subproductTo = invoiceItemTo.invoiceProduct.subproduct;
      const fromUserId = invoiceItemFrom.invoiceProduct.invoice.user.id;
      const toUserId = invoiceItemTo.invoiceProduct.invoice.user.id;
      if (subproductFrom != subproductTo) {
        return {
          message: 'نوع محصول‌های انتخاب شده برای جابجایی باید یکسان باشند',
          status: false,
        };
      }
      const invoiceProductItemFromStatuses =
        invoiceItemFrom.invoiceProductItemInvoiceProductStatuses.map(
          (pivot) => pivot.invoiceProductStatus
        );
      const invoiceProductItemToStatuses =
        invoiceItemFrom.invoiceProductItemInvoiceProductStatuses.map(
          (pivot) => pivot.invoiceProductStatus
        );
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();

      return {
        message: `${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
    // Perform the replacement logic here
    // For example, you might want to swap some properties or update references

    // Save the changes
    await this.invoiceProductItemRepository.save(invoiceItemFrom);
    await this.invoiceProductItemRepository.save(invoiceItemTo);

    return { success: true };
  }
}
