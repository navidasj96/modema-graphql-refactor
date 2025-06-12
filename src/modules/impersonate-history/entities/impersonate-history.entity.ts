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
  'impersonate_histories_impersonate_user_id_index',
  ['impersonateUserId'],
  {}
)
@Index('impersonate_histories_user_id_index', ['userId'], {})
@Entity('impersonate_histories', { schema: 'modema' })
export class ImpersonateHistory {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'impersonate_user_id', unsigned: true })
  impersonateUserId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.impersonateHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'impersonate_user_id', referencedColumnName: 'id' }])
  impersonateUser: User;

  @ManyToOne(() => User, (user) => user.impersonateHistories2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
