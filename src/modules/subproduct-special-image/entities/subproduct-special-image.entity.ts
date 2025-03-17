import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('subproduct_special_images_image_id_index', ['imageId'], {})
@Index('subproduct_special_images_subproduct_id_index', ['subproductId'], {})
@Entity('subproduct_special_images', { schema: 'modema' })
export class SubproductSpecialImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

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
