import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { Image } from '@/modules/image/entities/image.entity';

@Index('return_request_item_image_unique', ['returnRequestItemId', 'imageId'], {
  unique: true,
})
@Index('return_request_item_images_image_id_index', ['imageId'], {})
@Index(
  'return_request_item_images_return_request_item_id_index',
  ['returnRequestItemId'],
  {}
)
@Entity('return_request_item_images', { schema: 'modema' })
export class ReturnRequestItemImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'return_request_item_id', unsigned: true })
  returnRequestItemId: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Image, (images) => images.returnRequestItemImages, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.returnRequestItemImages,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'return_request_item_id', referencedColumnName: 'id' }])
  returnRequestItem: ReturnRequestItem;
}
