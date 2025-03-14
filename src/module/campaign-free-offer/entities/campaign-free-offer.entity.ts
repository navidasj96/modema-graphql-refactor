import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('campaign_free_offers', { schema: 'modema' })
export class CampaignFreeOffer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('decimal', { name: 'min_price', precision: 18, scale: 2 })
  minPrice: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
