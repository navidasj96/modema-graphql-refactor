import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'campaign_free_offer_sizes_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {},
)
@Index(
  'campaign_free_offer_sizes_campaign_free_offer_id_index',
  ['campaignFreeOfferId'],
  {},
)
@Entity('campaign_free_offer_sizes', { schema: 'modema' })
export class CampaignFreeOfferSize {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'campaign_free_offer_id', unsigned: true })
  campaignFreeOfferId: number;

  @Column('int', { name: 'basic_carpet_size_id', unsigned: true })
  basicCarpetSizeId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
