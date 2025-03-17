import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'return_request_item_return_item_status_idx_item',
  ['returnRequestItemId'],
  {},
)
@Index(
  'return_request_item_return_item_status_idx_status',
  ['returnItemStatusId'],
  {},
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
}
