import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'special_offers_special_offer_product_id_index',
  ['specialOfferProductId'],
  {},
)
@Index(
  'special_offers_wonderful_offer_product_id_index',
  ['wonderfulOfferProductId'],
  {},
)
@Entity('special_offers', { schema: 'modema' })
export class SpecialOffer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', {
    name: 'special_offer_product_id',
    nullable: true,
    unsigned: true,
  })
  specialOfferProductId?: number;

  @Column('int', {
    name: 'wonderful_offer_product_id',
    nullable: true,
    unsigned: true,
  })
  wonderfulOfferProductId?: number;

  @Column('varchar', {
    name: 'special_offer_title',
    nullable: true,
    length: 191,
  })
  specialOfferTitle?: string;

  @Column('varchar', {
    name: 'special_offer_subtitle',
    nullable: true,
    length: 191,
  })
  specialOfferSubtitle?: string;

  @Column('varchar', {
    name: 'special_offer_image_url',
    nullable: true,
    length: 191,
  })
  specialOfferImageUrl?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
