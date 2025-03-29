import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '@/modules/image/entities/image.entity';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/entities/size-guides-detail.entity';

@Index('size_guides_image_id_index', ['imageId'], {})
@Index('size_guides_title_index', ['title'], {})
@Entity('size_guides', { schema: 'modema' })
export class SizeGuide {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('text', { name: 'text' })
  text: string;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Image, (image) => image.sizeGuides, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @OneToMany(
    () => SizeGuidesDetail,
    (sizeGuidesDetail) => sizeGuidesDetail.sizeGuide,
  )
  sizeGuidesDetails: SizeGuidesDetail[];
}
