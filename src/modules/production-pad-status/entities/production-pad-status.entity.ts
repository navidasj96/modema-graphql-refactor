import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/entities/production-pad-production-pad-status.entity';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';

@Entity('production_pad_statuses', { schema: 'modema' })
export class ProductionPadStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('int', { name: 'step', default: () => "'1'" })
  step: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductionPadProductionPadStatus,
    (productionPadProductionPadStatus) =>
      productionPadProductionPadStatus.productionPadStatus
  )
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @OneToMany(
    () => ProductionPad,
    (productionPad) => productionPad.productionPadStatus
  )
  productionPads: ProductionPad[];
}
