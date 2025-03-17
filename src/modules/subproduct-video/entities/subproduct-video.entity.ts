import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('subproduct_video_subproduct_id_index', ['subproductId'], {})
@Index('subproduct_video_video_id_index', ['videoId'], {})
@Index(
  'subproduct_video_video_id_subproduct_id_unique',
  ['videoId', 'subproductId'],
  { unique: true },
)
@Entity('subproduct_video', { schema: 'modema' })
export class SubproductVideo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'video_id', unsigned: true })
  videoId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('int', {
    name: 'sort_order',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sortOrder?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
