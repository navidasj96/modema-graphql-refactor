import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/entities/return-item-status-return-request-item.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/entities/return-request-item-return-item-status.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';

@Index('return_item_statuses_name_unique', ['name'], { unique: true })
@Entity('return_item_statuses', { schema: 'modema' })
export class ReturnItemStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('int', { name: 'step_test', nullable: true })
  stepTest?: number;

  @Column('int', { name: 'step_guarantee', nullable: true })
  stepGuarantee?: number;

  @Column('int', { name: 'sort_order', default: () => "'1'" })
  sortOrder: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ReturnItemStatusReturnRequestItem,
    (returnItemStatusReturnRequestItem) =>
      returnItemStatusReturnRequestItem.returnItemStatus,
  )
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.returnItemStatus,
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItemReturnItemStatus,
    (returnRequestItemReturnItemStatus) =>
      returnRequestItemReturnItemStatus.returnItemStatus,
  )
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @OneToMany(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.returnItemStatus,
  )
  returnRequestItems: ReturnRequestItem[];
}
