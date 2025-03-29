import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { RipTemplate } from '@/modules/rip-template/entities/rip-template.entity';
import { User } from '@/modules/user/entities/user.entity';

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

  @OneToMany(
    () => InvoiceProductItem,
    (invoiceProductItem) => invoiceProductItem.printRip,
  )
  invoiceProductItems: InvoiceProductItem[];

  @ManyToOne(() => RipTemplate, (ripTemplate) => ripTemplate.printRips, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'rip_template_id', referencedColumnName: 'id' }])
  ripTemplate: RipTemplate;

  @ManyToOne(() => User, (user) => user.printRips, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
