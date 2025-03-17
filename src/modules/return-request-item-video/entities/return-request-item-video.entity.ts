import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('return_request_item_video_unique', ['returnRequestItemId', 'videoId'], {
  unique: true,
})
@Index(
  'return_request_item_videos_return_request_item_id_index',
  ['returnRequestItemId'],
  {},
)
@Index('return_request_item_videos_video_id_index', ['videoId'], {})
@Entity('return_request_item_videos', { schema: 'modema' })
export class ReturnRequestItemVideo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'return_request_item_id', unsigned: true })
  returnRequestItemId: number;

  @Column('int', { name: 'video_id', unsigned: true })
  videoId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
