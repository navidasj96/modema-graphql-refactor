import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images', { schema: 'modema' })
export class Image {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('varchar', { name: 'upload_source', length: 191 })
  uploadSource: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('varchar', { name: 'alt_text', nullable: true, length: 766 })
  altText?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('tinyint', {
    name: 'image_recreated',
    width: 1,
    default: () => "'0'",
  })
  imageRecreated: boolean;

  @Column('varchar', { name: 'alt_text_en', nullable: true, length: 191 })
  altTextEn?: string;
}
