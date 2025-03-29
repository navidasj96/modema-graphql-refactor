import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserUtm } from '@/modules/user-utm/entities/user-utm.entity';

@Index(
  'utms_utm_source_utm_medium_unique',
  ['utmSource', 'utmMedium', 'utmCampaign', 'utmContent'],
  { unique: true },
)
@Entity('utms', { schema: 'modema' })
export class Utm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'utm_source', length: 191 })
  utmSource: string;

  @Column('varchar', { name: 'utm_medium', nullable: true, length: 191 })
  utmMedium?: string;

  @Column('varchar', { name: 'utm_campaign', nullable: true, length: 191 })
  utmCampaign?: string;

  @Column('varchar', { name: 'utm_content', nullable: true, length: 191 })
  utmContent?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => UserUtm, (userUtm) => userUtm.utm)
  userUtms: UserUtm[];
}
