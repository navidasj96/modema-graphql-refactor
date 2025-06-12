import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetFeatureUser } from '@/modules/carpet-feature-user/entities/carpet-feature-user.entity';

@Index('carpet_features_sort_order_index', ['sortOrder'], {})
@Entity('carpet_features', { schema: 'modema' })
export class CarpetFeature {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => CarpetFeatureUser,
    (carpetFeatureUser) => carpetFeatureUser.carpetFeature
  )
  carpetFeatureUsers: CarpetFeatureUser[];
}
