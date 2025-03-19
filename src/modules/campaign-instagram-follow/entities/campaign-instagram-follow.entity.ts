import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Index('campaign_instagram_follows_answer_no_index', ['answerNo'], {})
@Index('campaign_instagram_follows_phone_unique', ['phone'], { unique: true })
@Index('campaign_instagram_follows_sex_index', ['sex'], {})
@Index('campaign_instagram_follows_user_id_index', ['userId'], {})
@Entity('campaign_instagram_follows', { schema: 'modema' })
export class CampaignInstagramFollow {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'phone', unique: true, length: 191 })
  phone: string;

  @Column('tinyint', { name: 'phone_verified', width: 1, default: () => "'0'" })
  phoneVerified: boolean;

  @Column('smallint', { name: 'birth_year', nullable: true, unsigned: true })
  birthYear?: number;

  @Column('tinyint', { name: 'sex', nullable: true, unsigned: true })
  sex?: number;

  @Column('tinyint', { name: 'answer_no', nullable: true, unsigned: true })
  answerNo?: number;

  @Column('varchar', { name: 'image1', nullable: true, length: 191 })
  image1?: string;

  @Column('varchar', { name: 'image2', nullable: true, length: 191 })
  image2?: string;

  @Column('varchar', { name: 'verification_code', nullable: true, length: 191 })
  verificationCode?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.campaignInstagramFollows, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
