import { Column, Entity } from 'typeorm';

@Entity('oauth_auth_codes', { schema: 'modema' })
export class OauthAuthCode {
  @Column('varchar', { primary: true, name: 'id', length: 100 })
  id: string;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'client_id' })
  clientId: number;

  @Column('text', { name: 'scopes', nullable: true })
  scopes?: string;

  @Column('tinyint', { name: 'revoked', width: 1 })
  revoked: boolean;

  @Column('datetime', { name: 'expires_at', nullable: true })
  expiresAt?: Date;
}
