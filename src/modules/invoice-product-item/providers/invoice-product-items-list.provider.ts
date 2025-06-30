import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductItemsListInput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.input';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';

@Injectable()
export class InvoiceProductItemsListProvider {
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

  async invoiceProductItemsList(
    invoiceProductItemsListInput: InvoiceProductItemsListInput
  ) {
    const { limit, offset, isShaggy, rollReferenceCode, search } =
      invoiceProductItemsListInput;

    const invoiceProductItems = (await this.dataSource.query(
      `
        SELECT 
          item.id,
          item.code,
          invoice.invoice_number AS invoiceNumber,
          product.name AS productName,
          roll.roll_number AS rollNumber,
          address.fullname,
          status.status AS currentStatus,
          size.title AS carpetSize,
          size.code AS carpetSizeCode,
          color.title AS carpetColor,
          color.code AS carpetColorCode,
          profile.version_no AS printProfileVersion,
          rip.rip_number AS printRipNumber
        FROM invoice_product_items item
          INNER JOIN invoice_products ip ON item.invoice_product_id = ip.id
          INNER JOIN invoices invoice ON ip.invoice_id = invoice.id
          INNER JOIN invoice_addresses address ON invoice.id = address.invoice_id
          INNER JOIN products product ON ip.product_id = product.id
          INNER JOIN subproducts sub ON ip.subproduct_id = sub.id
          INNER JOIN basic_carpet_sizes size ON sub.basic_carpet_size_id = size.id
          INNER JOIN basic_carpet_colors color ON sub.basic_carpet_color_id = color.id
          INNER JOIN invoice_product_statuses status ON item.current_status_id = status.id
          LEFT JOIN print_profiles profile ON item.print_profile_id = profile.id
          LEFT JOIN production_rolls roll ON item.production_roll_id = roll.id
          LEFT JOIN print_rips rip ON item.print_rip_id = rip.id
        WHERE product.is_shaggy = ?
          AND invoice.current_invoice_status_id IN (?,?,?)
          ${
            search
              ? `AND (
            invoice.invoice_number LIKE ?
            OR item.code LIKE ?
            OR roll.roll_number LIKE ?
            OR address.fullname LIKE ?
            OR status.status LIKE ?
            OR product.name LIKE ?
            OR size.title LIKE ?
            OR size.code LIKE ?
            OR color.title LIKE ?
            OR color.code LIKE ?
            OR profile.version_no LIKE ?
            OR rip.rip_number LIKE ?
          )`
              : ''
          }
        LIMIT ? OFFSET ?
        `,
      [
        isShaggy ? 1 : 0,
        ...INVOICE_STATUSES_AFTER_PRODUCTION_START,
        ...(search
          ? Array(14).fill(`%${search}%`) // 14 OR conditions
          : []),
        limit,
        offset,
      ]
    )) as InvoiceProductItem[];

    console.log('invoiceProductItems', invoiceProductItems);

    return invoiceProductItems;
  }
}
