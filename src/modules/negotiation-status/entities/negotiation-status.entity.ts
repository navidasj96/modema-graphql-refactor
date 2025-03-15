import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
