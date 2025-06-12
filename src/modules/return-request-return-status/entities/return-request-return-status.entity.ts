import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { ReturnStatus } from '@/modules/return-status/entities/return-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'return_request_return_status_return_request_id_index',
  ['returnRequestId'],
  {}
)
@Index(
  'return_request_return_status_return_status_id_index',
  ['returnStatusId'],
  {}
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

  @ManyToOne(
    () => ReturnRequest,
    (returnRequest) => returnRequest.returnRequestReturnStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'return_request_id', referencedColumnName: 'id' }])
  returnRequest: ReturnRequest;

  @ManyToOne(
    () => ReturnStatus,
    (returnStatus) => returnStatus.returnRequestReturnStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'return_status_id', referencedColumnName: 'id' }])
  returnStatus: ReturnStatus;

  @ManyToOne(() => User, (user) => user.returnRequestReturnStatuses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
