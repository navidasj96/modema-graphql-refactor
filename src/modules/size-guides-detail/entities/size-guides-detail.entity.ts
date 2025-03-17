import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('size_guides_details_details_title_index', ['detailsTitle'], {})
@Index('size_guides_details_icon_title_index', ['iconTitle'], {})
@Index('size_guides_details_image_id_index', ['imageId'], {})
@Index('size_guides_details_size_guide_id_index', ['sizeGuideId'], {})
@Index('size_guides_details_title_index', ['title'], {})
@Entity('size_guides_details', { schema: 'modema' })
export class SizeGuidesDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('text', { name: 'text' })
  text: string;

  @Column('varchar', { name: 'icon_title', length: 191 })
  iconTitle: string;

  @Column('text', { name: 'icon_text' })
  iconText: string;

  @Column('varchar', { name: 'details_title', length: 191 })
  detailsTitle: string;

  @Column('text', { name: 'details_text' })
  detailsText: string;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'size_guide_id', unsigned: true })
  sizeGuideId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
