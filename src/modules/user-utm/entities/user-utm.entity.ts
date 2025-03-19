import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { Utm } from '@/modules/utm/entities/utm.entity';

@Index('user_utm_user_id_index', ['userId'], {})
@Index('user_utm_user_id_utm_id_unique', ['userId', 'utmId'], { unique: true })
@Index('user_utm_utm_id_index', ['utmId'], {})
@Entity('user_utm', { schema: 'modema' })
export class UserUtm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'utm_id', unsigned: true })
  utmId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.userUtms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => Utm, (utm) => utm.userUtms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'utm_id', referencedColumnName: 'id' }])
  utm: Utm;
}
