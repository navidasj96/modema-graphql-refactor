import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { ReturnedInvoice } from '@/modules/returned-invoice/entities/returned-invoice.entity';

@Entity('return_reasons', { schema: 'modema' })
export class ReturnReason {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'reason', length: 191 })
  reason: string;

  @Column('int', { name: 'sort_order', default: () => "'0'" })
  sortOrder: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.returnReason,
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.returnReason,
  )
  returnRequestItems: ReturnRequestItem[];

  @OneToMany(
    () => ReturnedInvoice,
    (returnedInvoice) => returnedInvoice.returnReason,
  )
  returnedInvoices: ReturnedInvoice[];
}
