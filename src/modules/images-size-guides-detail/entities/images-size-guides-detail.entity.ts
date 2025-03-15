import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
