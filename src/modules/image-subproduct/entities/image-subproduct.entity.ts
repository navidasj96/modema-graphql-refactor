import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('image_subproduct_idx1', ['imageId', 'subproductId'], {})
@Index('image_subproduct_image_id_index', ['imageId'], {})
@Index('image_subproduct_subproduct_id_index', ['subproductId'], {})
@Entity('image_subproduct', { schema: 'modema' })
export class ImageSubproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('tinyint', {
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
