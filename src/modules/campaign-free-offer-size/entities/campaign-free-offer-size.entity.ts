import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { CampaignFreeOffer } from '@/modules/campaign-free-offer/entities/campaign-free-offer.entity';

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

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.campaignFreeOfferSizes,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;

  @ManyToOne(
    () => CampaignFreeOffer,
    (campaignFreeOffer) => campaignFreeOffer.campaignFreeOfferSizes,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'campaign_free_offer_id', referencedColumnName: 'id' }])
  campaignFreeOffer: CampaignFreeOffer;
}
