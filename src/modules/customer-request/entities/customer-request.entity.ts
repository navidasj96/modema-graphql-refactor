import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('customer_requests_user_id_index', ['userId'], {})
@Entity('customer_requests', { schema: 'modema' })
export class CustomerRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'uuid', nullable: true, length: 192 })
  uuid?: string;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
