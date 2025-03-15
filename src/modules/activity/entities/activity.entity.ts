import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Index('activities_deleted_user_id_index', ['deletedUserId'], {})
@Index('activities_user_id_index', ['userId'], {})
@Entity('activities', { schema: 'modema' })
export class Activity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('varchar', { name: 'user_name', length: 191 })
  userName: string;

  @Column('int', { name: 'content_id' })
  contentId: number;

  @Column('varchar', { name: 'content_type', length: 191 })
  contentType: string;

  @Column('varchar', { name: 'action', length: 191 })
  action: string;

  @Column('varchar', { name: 'description', length: 191 })
  description: string;

  @Column('text', { name: 'details' })
  details: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'deleted_user_id', nullable: true, unsigned: true })
  deletedUserId?: number;

  @ManyToOne(() => User, (user) => user.activities, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user?: User;
}
