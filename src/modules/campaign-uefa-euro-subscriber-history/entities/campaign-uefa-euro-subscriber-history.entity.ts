import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactFormStatus } from '@/modules/contact-form-status/entities/contact-form-status.entity';
import { CampaignUefaEuroSubscriber } from '@/modules/campaign-uefa-euro-subscriber/entities/campaign-uefa-euro-subscriber.entity';
import { User } from '@/modules/user/entities/user.entity';

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

  @ManyToOne(() => User, (user) => user.campaignUefaEuroSubscriberHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(
    () => ContactFormStatus,
    (contactFormStatus) =>
      contactFormStatus.campaignUefaEuroSubscriberHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'contact_form_status_id', referencedColumnName: 'id' }])
  contactFormStatus: ContactFormStatus;

  @ManyToOne(
    () => CampaignUefaEuroSubscriber,
    (campaignUefaEuroSubscriber) =>
      campaignUefaEuroSubscriber.campaignUefaEuroSubscriberHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'campaign_uefa_euro_subscriber_id', referencedColumnName: 'id' },
  ])
  campaignUefaEuroSubscriber: CampaignUefaEuroSubscriber;
}
