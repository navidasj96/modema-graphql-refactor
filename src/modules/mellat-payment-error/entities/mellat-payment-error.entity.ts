import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mellat_payment_errors', { schema: 'modema' })
export class MellatPaymentError {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('varchar', { name: 'message', nullable: true, length: 191 })
  message?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
