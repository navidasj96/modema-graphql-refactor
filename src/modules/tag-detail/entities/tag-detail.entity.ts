import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '@/modules/tag/entities/tag.entity';
@Index('tag_details_tag_id_index', ['tagId'], {})
@Entity('tag_details', { schema: 'modema' })
export class TagDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'tag_id', nullable: true, unsigned: true })
  tagId: number | null;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title: string | null;

  @Column('text', { name: 'detail_text', nullable: true })
  detailText: string | null;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'title_en', nullable: true, length: 191 })
  titleEn: string | null;

  @Column('text', { name: 'detail_text_en', nullable: true })
  detailTextEn: string | null;

  @ManyToOne(() => Tag, (tag) => tag.tagDetails, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  tag: Tag;
}
