import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('wonderful_offers_product_id_index', ['productId'], {})
@Entity('wonderful_offers', { schema: 'modema' })
export class WonderfulOffer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('tinyint', { name: 'day_of_week', default: () => "'1'" })
  dayOfWeek: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
