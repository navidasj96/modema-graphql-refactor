import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'impersonate_histories_impersonate_user_id_index',
  ['impersonateUserId'],
  {},
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
}
