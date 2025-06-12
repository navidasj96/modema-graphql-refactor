import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Negotiation } from '@/modules/negotiation/entities/negotiation.entity';
import { NegotiationStatus } from '@/modules/negotiation-status/entities/negotiation-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('negotiation_histories_negotiation_id_index', ['negotiationId'], {})
@Index(
  'negotiation_histories_negotiation_status_id_index',
  ['negotiationStatusId'],
  {}
)
@Index('negotiation_histories_new_negotiator_id_index', ['newNegotiatorId'], {})
@Index('negotiation_histories_old_negotiator_id_index', ['oldNegotiatorId'], {})
@Index('negotiation_histories_submitted_by_index', ['submittedBy'], {})
@Entity('negotiation_histories', { schema: 'modema' })
export class NegotiationHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'negotiation_id', unsigned: true })
  negotiationId: number;

  @Column('int', { name: 'negotiation_status_id', unsigned: true })
  negotiationStatusId: number;

  @Column('int', { name: 'submitted_by', unsigned: true })
  submittedBy: number;

  @Column('int', { name: 'old_negotiator_id', unsigned: true })
  oldNegotiatorId: number;

  @Column('int', { name: 'new_negotiator_id', unsigned: true })
  newNegotiatorId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => Negotiation,
    (negotiation: Negotiation) => negotiation.negotiationHistories,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'negotiation_id', referencedColumnName: 'id' }])
  negotiation: Negotiation;

  @ManyToOne(
    () => NegotiationStatus,
    (negotiationStatus: NegotiationStatus) =>
      negotiationStatus.negotiationHistories,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'negotiation_status_id', referencedColumnName: 'id' }])
  negotiationStatus: NegotiationStatus;

  @ManyToOne(() => User, (user: User) => user.negotiationHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'new_negotiator_id', referencedColumnName: 'id' }])
  newNegotiator: User;

  @ManyToOne(() => User, (user: User) => user.negotiationHistories2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'old_negotiator_id', referencedColumnName: 'id' }])
  oldNegotiator: User;

  @ManyToOne(() => User, (user: User) => user.negotiationHistories3, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'submitted_by', referencedColumnName: 'id' }])
  submittedBy2: User;
}
