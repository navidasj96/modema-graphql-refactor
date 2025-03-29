import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CampaignUefaEuroSubscriberHistory } from '@/modules/campaign-uefa-euro-subscriber-history/entities/campaign-uefa-euro-subscriber-history.entity';
import { ContactFormStatus } from '@/modules/contact-form-status/entities/contact-form-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'campaign_uefa_euro_subscribers_contact_form_status_id_index',
  ['contactFormStatusId'],
  {},
)
@Index('campaign_uefa_euro_subscribers_mobile_unique', ['mobile'], {
  unique: true,
})
@Index('campaign_uefa_euro_subscribers_user_id_index', ['userId'], {})
@Entity('campaign_uefa_euro_subscribers', { schema: 'modema' })
export class CampaignUefaEuroSubscriber {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('varchar', { name: 'mobile', unique: true, length: 191 })
  mobile: string;

  @Column('tinyint', { name: 'status', default: () => "'1'" })
  status: number;

  @Column('int', {
    name: 'contact_form_status_id',
    unsigned: true,
    default: () => "'1'",
  })
  contactFormStatusId: number;

  @OneToMany(
    () => CampaignUefaEuroSubscriberHistory,
    (campaignUefaEuroSubscriberHistory) =>
      campaignUefaEuroSubscriberHistory.campaignUefaEuroSubscriber,
  )
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistory[];

  @ManyToOne(
    () => ContactFormStatus,
    (contactFormStatus) => contactFormStatus.campaignUefaEuroSubscribers,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'contact_form_status_id', referencedColumnName: 'id' }])
  contactFormStatus: ContactFormStatus;

  @ManyToOne(() => User, (user) => user.campaignUefaEuroSubscribers, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
