import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('social_google_accounts_user_id_index', ['userId'], {})
@Entity('social_google_accounts', { schema: 'modema' })
export class SocialGoogleAccount {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', { name: 'provider_user_id', length: 191 })
  providerUserId: string;

  @Column('varchar', {
    name: 'provider',
    length: 191,
    default: () => "'google'",
  })
  provider: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
