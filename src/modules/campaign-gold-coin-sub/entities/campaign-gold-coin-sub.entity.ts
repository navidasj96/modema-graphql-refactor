import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('campaign_gold_coin_subs_user_id_unique', ['userId'], { unique: true })
@Entity('campaign_gold_coin_subs', { schema: 'modema' })
export class CampaignGoldCoinSub {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'user_id', unique: true, unsigned: true })
  userId: number;
}
