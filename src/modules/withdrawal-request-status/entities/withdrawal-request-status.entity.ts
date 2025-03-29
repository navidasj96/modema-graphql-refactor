import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WithdrawalRequest } from '@/modules/withdrawal-request/entities/withdrawal-request.entity';

@Entity('withdrawal_request_statuses', { schema: 'modema' })
export class WithdrawalRequestStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => WithdrawalRequest,
    (withdrawalRequest) => withdrawalRequest.withdrawalRequestStatus,
  )
  withdrawalRequests: WithdrawalRequest[];
}
