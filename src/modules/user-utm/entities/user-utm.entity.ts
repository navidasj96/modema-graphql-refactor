import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
