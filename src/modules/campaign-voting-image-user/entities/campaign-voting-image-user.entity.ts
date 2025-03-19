import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Index('campaign_voting_image_users_user_id_index', ['userId'], {})
@Index(
  'campaign_voting_image_users_wallet_charged_index',
  ['walletCharged'],
  {},
)
@Entity('campaign_voting_image_users', { schema: 'modema' })
export class CampaignVotingImageUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', {
    name: 'voted_campaign_image_ids',
    nullable: true,
    length: 191,
  })
  votedCampaignImageIds?: string;

  @Column('tinyint', { name: 'wallet_charged', width: 1, default: () => "'0'" })
  walletCharged: boolean;

  @Column('decimal', {
    name: 'charged_amount',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  chargedAmount: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.campaignVotingImageUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
