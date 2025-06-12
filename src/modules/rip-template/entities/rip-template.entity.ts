import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { RipTemplateItem } from '@/modules/rip-template-item/entities/rip-template-item.entity';
import { User } from '@/modules/user/entities/user.entity';

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

  @OneToMany(() => PrintRip, (printRip) => printRip.ripTemplate)
  printRips: PrintRip[];

  @OneToMany(
    () => RipTemplateItem,
    (ripTemplateItem) => ripTemplateItem.ripTemplate
  )
  ripTemplateItems: RipTemplateItem[];

  @ManyToOne(() => User, (user) => user.ripTemplates, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
