import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NegotiationStep } from '@/modules/negotiation-step/entities/negotiation-step.entity';

@Index('negotiation_types_name_index', ['name'], {})
@Entity('negotiation_types', { schema: 'modema' })
export class NegotiationType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => NegotiationStep,
    (negotiationStep) => negotiationStep.negotiationType
  )
  negotiationSteps: NegotiationStep[];
}
