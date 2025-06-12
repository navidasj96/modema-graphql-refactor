import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetFeature } from '@/modules/carpet-feature/entities/carpet-feature.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('carpet_feature_user_carpet_feature_id_index', ['carpetFeatureId'], {})
@Index('carpet_feature_user_user_id_index', ['userId'], {})
@Entity('carpet_feature_user', { schema: 'modema' })
export class CarpetFeatureUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'carpet_feature_id', unsigned: true })
  carpetFeatureId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => CarpetFeature,
    (carpetFeature) => carpetFeature.carpetFeatureUsers,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'carpet_feature_id', referencedColumnName: 'id' }])
  carpetFeature: CarpetFeature;

  @ManyToOne(() => User, (user) => user.carpetFeatureUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
