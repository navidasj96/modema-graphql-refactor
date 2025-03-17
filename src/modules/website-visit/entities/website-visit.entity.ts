import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('website_visits_date_m_index', ['dateM'], {})
@Index('website_visits_date_sh_index', ['dateSh'], {})
@Index('website_visits_day_sh_index', ['daySh'], {})
@Index('website_visits_month_sh_index', ['monthSh'], {})
@Index('website_visits_year_sh_index', ['yearSh'], {})
@Entity('website_visits', { schema: 'modema' })
export class WebsiteVisit {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'daily_visits', default: () => "'0'" })
  dailyVisits: number;

  @Column('date', { name: 'date_m', nullable: true })
  dateM?: string;

  @Column('varchar', { name: 'date_sh', nullable: true, length: 191 })
  dateSh?: string;

  @Column('int', { name: 'year_sh', nullable: true })
  yearSh?: number;

  @Column('int', { name: 'month_sh', nullable: true })
  monthSh?: number;

  @Column('int', { name: 'day_sh', nullable: true })
  daySh?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
