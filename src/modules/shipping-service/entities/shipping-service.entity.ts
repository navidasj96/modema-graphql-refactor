import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/entities/invoice-rates-result.entity';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/entities/invoice-shipping-rate.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

@Index('fedex_services_code_unique', ['code'], { unique: true })
@Entity('shipping_services', { schema: 'modema' })
export class ShippingService {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'code', unique: true, length: 191 })
  code: string;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'description', nullable: true, length: 191 })
  description?: string;

  @Column('text', { name: 'full_description', nullable: true })
  fullDescription?: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @OneToMany(
    () => InvoiceRatesResult,
    (invoiceRatesResult) => invoiceRatesResult.shippingService
  )
  invoiceRatesResults: InvoiceRatesResult[];

  @OneToMany(
    () => InvoiceShippingRate,
    (invoiceShippingRate) => invoiceShippingRate.shippingService
  )
  invoiceShippingRates: InvoiceShippingRate[];

  @OneToMany(() => Invoice, (invoice) => invoice.shippingService)
  invoices: Invoice[];
}
