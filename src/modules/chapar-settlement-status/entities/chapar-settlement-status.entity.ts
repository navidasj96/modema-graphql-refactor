import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chapar_settlement_statuses', { schema: 'modema' })
export class ChaparSettlementStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
