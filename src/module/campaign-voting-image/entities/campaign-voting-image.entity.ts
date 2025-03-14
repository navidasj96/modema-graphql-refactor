import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('campaign_voting_images_campaign_no_index', ['campaignNo'], {})
@Index('campaign_voting_images_image_id_index', ['imageId'], {})
@Index('campaign_voting_images_sort_order_index', ['sortOrder'], {})
@Entity('campaign_voting_images', { schema: 'modema' })
export class CampaignVotingImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'campaign_no', unsigned: true })
  campaignNo: number;

  @Column('int', { name: 'sort_order', unsigned: true, default: () => "'1'" })
  sortOrder: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
