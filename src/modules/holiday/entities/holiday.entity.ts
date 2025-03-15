import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('holidays_holiday_date_unique', ['holidayDate'], { unique: true })
@Index('holidays_user_id_index', ['userId'], {})
@Entity('holidays', { schema: 'modema' })
export class Holiday {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('date', { name: 'holiday_date', unique: true })
  holidayDate: string;

  @Column('tinyint', { name: 'weekday' })
  weekday: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId: number | null;
}
