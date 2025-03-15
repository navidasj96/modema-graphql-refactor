import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('password_resets_email_index', ['email'], {})
@Entity('password_resets', { schema: 'modema' })
export class PasswordReset {
  @PrimaryGeneratedColumn()
  email: string;

  @Column('varchar', { name: 'token', length: 191 })
  token: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;
}
