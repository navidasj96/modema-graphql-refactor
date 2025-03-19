import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { Video } from '@/modules/video/entities/video.entity';

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

  @ManyToOne(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.returnRequestItemVideos,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_request_item_id', referencedColumnName: 'id' }])
  returnRequestItem: ReturnRequestItem;

  @ManyToOne(() => Video, (video) => video.returnRequestItemVideos, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'video_id', referencedColumnName: 'id' }])
  video: Video;
}
