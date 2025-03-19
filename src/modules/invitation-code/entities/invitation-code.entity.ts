import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Index('invitation_codes_code_unique', ['code'], { unique: true })
@Index('invitation_codes_email_unique', ['email'], { unique: true })
@Entity('invitation_codes', { schema: 'modema' })
export class InvitationCode {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'code', unique: true, length: 191 })
  code: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 191,
  })
  email?: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('int', {
    name: 'max_usage',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  maxUsage?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => User, (user) => user.invitationCode)
  users: User[];
}
