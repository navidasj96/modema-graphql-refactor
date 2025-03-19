import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { ProductionPadStatus } from '@/modules/production-pad-status/entities/production-pad-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('prod_pad_prod_pad_status_pad_id_foreign', ['productionPadId'], {})
@Index(
  'prod_pad_prod_pad_status_status_id_foreign',
  ['productionPadStatusId'],
  {},
)
@Index('production_pad_production_pad_status_user_id_index', ['userId'], {})
@Entity('production_pad_production_pad_status', { schema: 'modema' })
export class ProductionPadProductionPadStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'production_pad_id', unsigned: true })
  productionPadId: number;

  @Column('int', { name: 'production_pad_status_id', unsigned: true })
  productionPadStatusId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (users) => users.productionPadProductionPadStatuses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(
    () => ProductionPad,
    (productionPad) => productionPad.productionPadProductionPadStatuses,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'production_pad_id', referencedColumnName: 'id' }])
  productionPad: ProductionPad;

  @ManyToOne(
    () => ProductionPadStatus,
    (productionPadStatus) =>
      productionPadStatus.productionPadProductionPadStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'production_pad_status_id', referencedColumnName: 'id' },
  ])
  productionPadStatus: ProductionPadStatus;
}
