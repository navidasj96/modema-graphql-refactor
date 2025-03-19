import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '@/modules/image/entities/image.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('help_desks_image_id_index', ['imageId'], {})
@Index('help_desks_user_id_unique', ['userId'], { unique: true })
@Entity('help_desks', { schema: 'modema' })
export class HelpDesk {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('int', { name: 'user_id', unique: true, unsigned: true })
  userId: number;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title?: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('int', { name: 'image_id', nullable: true, unsigned: true })
  imageId?: number;

  @Column('int', { name: 'is_online', nullable: true })
  isOnline?: number;

  @Column('int', { name: 'is_active', nullable: true })
  isActive?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Image, (image) => image.helpDesks, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @OneToOne(() => User, (user) => user.helpDesks, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
