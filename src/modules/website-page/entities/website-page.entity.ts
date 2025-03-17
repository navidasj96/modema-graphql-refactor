import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('website_pages_page_key_unique', ['key', 'page'], { unique: true })
@Entity('website_pages', { schema: 'modema' })
export class WebsitePage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'key', length: 191 })
  key: string;

  @Column('text', { name: 'value' })
  value: string;

  @Column('varchar', { name: 'page', length: 191 })
  page: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
