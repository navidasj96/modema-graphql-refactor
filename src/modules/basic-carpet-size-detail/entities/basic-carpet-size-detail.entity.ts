import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';

@Index(
  'basic_carpet_size_details_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {}
)
@Entity('basic_carpet_size_details', { schema: 'modema' })
export class BasicCarpetSizeDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', {
    name: 'basic_carpet_size_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId?: number;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title?: string;

  @Column('text', { name: 'detail_text', nullable: true })
  detailText?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'title_en', nullable: true, length: 191 })
  titleEn?: string;

  @Column('text', { name: 'detail_text_en', nullable: true })
  detailTextEn?: string;

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.basicCarpetSizeDetails,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;
}
