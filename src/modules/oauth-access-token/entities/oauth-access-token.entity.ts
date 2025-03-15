import { Column, Entity, Index } from 'typeorm';

@Index('oauth_access_tokens_user_id_index', ['userId'], {})
@Entity('oauth_access_tokens', { schema: 'modema' })
export class OauthAccessToken {
  @Column('varchar', { primary: true, name: 'id', length: 100 })
  id: string;

  @Column('int', { name: 'user_id', nullable: true })
  userId?: number;

  @Column('int', { name: 'client_id' })
  clientId: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('text', { name: 'scopes', nullable: true })
  scopes?: string;

  @Column('tinyint', { name: 'revoked', width: 1 })
  revoked: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('datetime', { name: 'expires_at', nullable: true })
  expiresAt?: Date;
}
