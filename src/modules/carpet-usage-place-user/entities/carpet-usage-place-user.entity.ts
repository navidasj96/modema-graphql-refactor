import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'carpet_usage_place_user_carpet_usage_place_id_index',
  ['carpetUsagePlaceId'],
  {},
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
}
