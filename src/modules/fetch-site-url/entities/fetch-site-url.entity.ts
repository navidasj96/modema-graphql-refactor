import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fetch_site_urls', { schema: 'modema' })
export class FetchSiteUrl {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'url', length: 191 })
  url: string;

  @Column('tinyint', { name: 'is_fetch', width: 1, default: () => "'0'" })
  isFetch: boolean;

  @Column('datetime', { name: 'date' })
  date: Date;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
