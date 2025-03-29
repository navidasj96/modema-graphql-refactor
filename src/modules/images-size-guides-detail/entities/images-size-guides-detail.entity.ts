import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/entities/size-guides-detail.entity';
import { Image } from '@/modules/image/entities/image.entity';

@Index('images_size_guides_details_image_id_index', ['imageId'], {})
@Index(
  'images_size_guides_details_size_guides_details_id_index',
  ['sizeGuidesDetailsId'],
  {},
)
@Entity('images_size_guides_details', { schema: 'modema' })
export class ImagesSizeGuidesDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'size_guides_details_id', unsigned: true })
  sizeGuidesDetailsId: number;

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

  @ManyToOne(() => Image, (image) => image.imagesSizeGuidesDetails, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(
    () => SizeGuidesDetail,
    (sizeGuidesDetail) => sizeGuidesDetail.imagesSizeGuidesDetails,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'size_guides_details_id', referencedColumnName: 'id' }])
  sizeGuidesDetails: SizeGuidesDetail;
}
