import { Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('tmp_users_idx1', ['userId'], { unique: true })
@Entity('tmp_users', { schema: 'modema' })
export class TmpUser {
  @PrimaryGeneratedColumn()
  userId?: string;
}
