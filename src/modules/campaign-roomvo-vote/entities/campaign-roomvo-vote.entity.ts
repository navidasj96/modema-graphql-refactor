import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'campaign_roomvo_votes_campaign_roomvo_image_id_index',
  ['campaignRoomvoImageId'],
  {},
)
@Index('campaign_roomvo_votes_user_id_index', ['userId'], {})
@Entity('campaign_roomvo_votes', { schema: 'modema' })
export class CampaignRoomvoVote {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'campaign_roomvo_image_id', unsigned: true })
  campaignRoomvoImageId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
