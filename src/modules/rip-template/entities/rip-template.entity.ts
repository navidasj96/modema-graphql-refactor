import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('rip_templates_user_id_index', ['userId'], {})
@Entity('rip_templates', { schema: 'modema' })
export class RipTemplate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;
}
