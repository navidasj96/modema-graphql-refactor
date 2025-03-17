import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'return_request_return_status_return_request_id_index',
  ['returnRequestId'],
  {},
)
@Index(
  'return_request_return_status_return_status_id_index',
  ['returnStatusId'],
  {},
)
@Index('return_request_return_status_user_id_index', ['userId'], {})
@Entity('return_request_return_status', { schema: 'modema' })
export class ReturnRequestReturnStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'return_request_id', unsigned: true })
  returnRequestId: number;

  @Column('int', { name: 'return_status_id', unsigned: true })
  returnStatusId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
