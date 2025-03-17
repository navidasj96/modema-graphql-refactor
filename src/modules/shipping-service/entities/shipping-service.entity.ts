import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fedex_services_code_unique', ['code'], { unique: true })
@Entity('shipping_services', { schema: 'modema' })
export class ShippingService {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'code', unique: true, length: 191 })
  code: string;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'description', nullable: true, length: 191 })
  description?: string;

  @Column('text', { name: 'full_description', nullable: true })
  fullDescription?: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;
}
