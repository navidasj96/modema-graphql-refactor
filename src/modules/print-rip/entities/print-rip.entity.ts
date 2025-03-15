import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('print_rips_rip_template_id_index', ['ripTemplateId'], {})
@Index('print_rips_user_id_index', ['userId'], {})
@Entity('print_rips', { schema: 'modema' })
export class PrintRip {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'rip_number', length: 191 })
  ripNumber: string;

  @Column('int', { name: 'rip_template_id', unsigned: true })
  ripTemplateId: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;
}
