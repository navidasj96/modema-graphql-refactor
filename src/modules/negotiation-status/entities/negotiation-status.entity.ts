import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NegotiationHistory } from '@/modules/negotiation-history/entities/negotiation-history.entity';
import { Negotiation } from '@/modules/negotiation/entities/negotiation.entity';

@Index('negotiation_statuses_name_index', ['name'], {})
@Entity('negotiation_statuses', { schema: 'modema' })
export class NegotiationStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => NegotiationHistory,
    (negotiationHistory) => negotiationHistory.negotiationStatus,
  )
  negotiationHistories: NegotiationHistory[];

  @OneToMany(() => Negotiation, (negotiation) => negotiation.negotiationStatus)
  negotiations: Negotiation[];
}
