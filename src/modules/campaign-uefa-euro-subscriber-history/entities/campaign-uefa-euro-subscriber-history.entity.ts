import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('campaign_uefa_euro_subscriber_histories_user_id_index', ['userId'], {})
@Index('idx_histories_statuses', ['contactFormStatusId'], {})
@Index('idx_histories_subscribers', ['campaignUefaEuroSubscriberId'], {})
@Entity('campaign_uefa_euro_subscriber_histories', { schema: 'modema' })
export class CampaignUefaEuroSubscriberHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'campaign_uefa_euro_subscriber_id', unsigned: true })
  campaignUefaEuroSubscriberId: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', { name: 'contact_form_status_id', unsigned: true })
  contactFormStatusId: number;

  @Column('varchar', { name: 'comment', nullable: true, length: 191 })
  comment?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
