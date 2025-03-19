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
import { User } from '@/modules/user/entities/user.entity';

@Index('print_profiles_created_by_index', ['createdBy'], {})
@Index('print_profiles_updated_by_index', ['updatedBy'], {})
@Index('print_profiles_version_change_date_unique', ['versionChangeDate'], {
  unique: true,
})
@Index('print_profiles_version_no_unique', ['versionNo'], { unique: true })
@Entity('print_profiles', { schema: 'modema' })
export class PrintProfile {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'version_no', unique: true, length: 191 })
  versionNo: string;

  @Column('datetime', { name: 'version_change_date', unique: true })
  versionChangeDate: Date;

  @Column('varchar', { name: 'ink_code', nullable: true, length: 191 })
  inkCode?: string;

  @Column('varchar', { name: 'pass_count', nullable: true, length: 191 })
  passCount?: string;

  @Column('varchar', { name: 'heat_temperature', nullable: true, length: 191 })
  heatTemperature?: string;

  @Column('varchar', { name: 'heat_speed', nullable: true, length: 191 })
  heatSpeed?: string;

  @Column('varchar', { name: 'head_height', nullable: true, length: 191 })
  headHeight?: string;

  @Column('varchar', {
    name: 'fabrics_texture_grade',
    nullable: true,
    length: 191,
  })
  fabricsTextureGrade?: string;

  @Column('varchar', {
    name: 'fabrics_per_square_meter_weight',
    nullable: true,
    length: 191,
  })
  fabricsPerSquareMeterWeight?: string;

  @Column('varchar', {
    name: 'fabrics_background_color',
    nullable: true,
    length: 191,
  })
  fabricsBackgroundColor?: string;

  @Column('varchar', {
    name: 'laminate_glue_type',
    nullable: true,
    length: 191,
  })
  laminateGlueType?: string;

  @Column('varchar', { name: 'cyan_curve', nullable: true, length: 191 })
  cyanCurve?: string;

  @Column('varchar', { name: 'cyan_gain', nullable: true, length: 191 })
  cyanGain?: string;

  @Column('varchar', { name: 'magenta_curve', nullable: true, length: 191 })
  magentaCurve?: string;

  @Column('varchar', { name: 'magenta_gain', nullable: true, length: 191 })
  magentaGain?: string;

  @Column('varchar', { name: 'black_curve', nullable: true, length: 191 })
  blackCurve?: string;

  @Column('varchar', { name: 'black_gain', nullable: true, length: 191 })
  blackGain?: string;

  @Column('varchar', { name: 'yellow_curve', nullable: true, length: 191 })
  yellowCurve?: string;

  @Column('varchar', { name: 'yellow_gain', nullable: true, length: 191 })
  yellowGain?: string;

  @Column('varchar', { name: 'total_ink_limit', nullable: true, length: 191 })
  totalInkLimit?: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'0'" })
  isActive: boolean;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy?: number;

  @Column('int', { name: 'updated_by', nullable: true, unsigned: true })
  updatedBy?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => InvoiceProductItem,
    (invoiceProductItem) => invoiceProductItem.printProfile,
  )
  invoiceProductItems: InvoiceProductItem[];

  @ManyToOne(() => User, (users) => users.printProfiles, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'created_by', referencedColumnName: 'id' }])
  createdBy2: User;

  @ManyToOne(() => User, (users) => users.printProfiles2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'updated_by', referencedColumnName: 'id' }])
  updatedBy2: User;
}
