import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/entities/production-pad-production-pad-status.entity';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { ProductionPadStatus } from '@/modules/production-pad-status/entities/production-pad-status.entity';

@Index('production_pads_basic_carpet_size_id_index', ['basicCarpetSizeId'], {})
@Index(
  'production_pads_production_pad_status_id_index',
  ['productionPadStatusId'],
  {}
)
@Entity('production_pads', { schema: 'modema' })
export class ProductionPad {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'basic_carpet_size_id', unsigned: true })
  basicCarpetSizeId: number;

  @Column('int', { name: 'production_pad_status_id', unsigned: true })
  productionPadStatusId: number;

  @Column('varchar', { name: 'code', length: 191 })
  code: string;

  @Column('tinyint', { name: 'is_used', width: 1, default: () => "'0'" })
  isUsed: boolean;

  @Column('tinyint', { name: 'is_tag_printed', width: 1, default: () => "'0'" })
  isTagPrinted: boolean;

  @Column('varchar', { name: 'roll_ref_code', nullable: true, length: 191 })
  rollRefCode?: string;

  @Column('int', { name: 'row_no', unsigned: true })
  rowNo: number;

  @Column('datetime', { name: 'request_date', nullable: true })
  requestDate?: Date;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductionPadProductionPadStatus,
    (productionPadProductionPadStatus) =>
      productionPadProductionPadStatus.productionPad
  )
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSizes) => basicCarpetSizes.productionPads,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;

  @ManyToOne(
    () => ProductionPadStatus,
    (productionPadStatus) => productionPadStatus.productionPads,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'production_pad_status_id', referencedColumnName: 'id' },
  ])
  productionPadStatus: ProductionPadStatus;
}
