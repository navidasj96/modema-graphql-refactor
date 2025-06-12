import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/entities/return-request-return-status.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';

@Index('return_statuses_name_unique', ['name'], { unique: true })
@Entity('return_statuses', { schema: 'modema' })
export class ReturnStatus {
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
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.returnStatus
  )
  returnRequestHistories: ReturnRequestHistory[];

  @OneToMany(
    () => ReturnRequestReturnStatus,
    (returnRequestReturnStatus) => returnRequestReturnStatus.returnStatus
  )
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @OneToMany(() => ReturnRequest, (returnRequest) => returnRequest.returnStatus)
  returnRequests: ReturnRequest[];
}
