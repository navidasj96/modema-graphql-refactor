import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { ReturnItemStatus } from '@/modules/return-item-status/entities/return-item-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'return_request_item_return_item_status_idx_item',
  ['returnRequestItemId'],
  {}
)
@Index(
  'return_request_item_return_item_status_idx_status',
  ['returnItemStatusId'],
  {}
)
@Index('return_request_item_return_item_status_user_id_index', ['userId'], {})
@Entity('return_request_item_return_item_status', { schema: 'modema' })
export class ReturnRequestItemReturnItemStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'return_request_item_id', unsigned: true })
  returnRequestItemId: number;

  @Column('int', { name: 'return_item_status_id', unsigned: true })
  returnItemStatusId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ReturnRequestItem,
    (returnRequestItem) =>
      returnRequestItem.returnRequestItemReturnItemStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'return_request_item_id', referencedColumnName: 'id' }])
  returnRequestItem: ReturnRequestItem;

  @ManyToOne(
    () => ReturnItemStatus,
    (returnItemStatus) => returnItemStatus.returnRequestItemReturnItemStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'return_item_status_id', referencedColumnName: 'id' }])
  returnItemStatus: ReturnItemStatus;

  @ManyToOne(() => User, (user) => user.returnRequestItemReturnItemStatuses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
