import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sitemap_static_pages', { schema: 'modema' })
export class SitemapStaticPage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'loc', length: 191 })
  loc: string;

  @Column('double', { name: 'priority', precision: 5, scale: 1 })
  priority: number;

  @Column('varchar', { name: 'changefreq', length: 191 })
  changefreq: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
