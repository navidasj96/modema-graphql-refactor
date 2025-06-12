import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetUsagePlace } from '@/modules/carpet-usage-place/entities/carpet-usage-place.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'carpet_usage_place_user_carpet_usage_place_id_index',
  ['carpetUsagePlaceId'],
  {}
)
@Index('carpet_usage_place_user_user_id_index', ['userId'], {})
@Entity('carpet_usage_place_user', { schema: 'modema' })
export class CarpetUsagePlaceUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'carpet_usage_place_id', unsigned: true })
  carpetUsagePlaceId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => CarpetUsagePlace,
    (carpetUsagePlace) => carpetUsagePlace.carpetUsagePlaceUsers,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'carpet_usage_place_id', referencedColumnName: 'id' }])
  carpetUsagePlace: CarpetUsagePlace;

  @ManyToOne(() => User, (user) => user.carpetUsagePlaceUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
