import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('negotiation_histories_negotiation_id_index', ['negotiationId'], {})
@Index(
  'negotiation_histories_negotiation_status_id_index',
  ['negotiationStatusId'],
  {},
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
}
