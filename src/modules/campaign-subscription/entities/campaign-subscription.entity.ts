import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'campaign_subscriptions_campaign_name_user_id_unique',
  ['campaignName', 'userId'],
  { unique: true }
)
@Index('campaign_subscriptions_code_index', ['code'], {})
@Index('campaign_subscriptions_user_id_index', ['userId'], {})
@Entity('campaign_subscriptions', { schema: 'modema' })
export class CampaignSubscription {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'campaign_name', nullable: true, length: 191 })
  campaignName?: string;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', {
    name: 'code',
    nullable: true,
    unsigned: true,
    default: () => "'1001'",
  })
  code?: number;

  @ManyToOne(() => User, (user) => user.campaignSubscriptions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
