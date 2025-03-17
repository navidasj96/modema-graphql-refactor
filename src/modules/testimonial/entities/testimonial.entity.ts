import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('testimonials', { schema: 'modema' })
export class Testimonial {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('varchar', { name: 'description', nullable: true, length: 191 })
  description?: string;

  @Column('varchar', { name: 'logo_image', nullable: true, length: 191 })
  logoImage?: string;

  @Column('varchar', { name: 'link', nullable: true, length: 191 })
  link?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
