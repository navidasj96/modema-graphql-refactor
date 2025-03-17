import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('verify_users_user_id_index', ['userId'], {})
@Entity('verify_users', { schema: 'modema' })
export class VerifyUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', { name: 'token', length: 191 })
  token: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
