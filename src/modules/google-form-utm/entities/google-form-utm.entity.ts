import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('google_form_utms_form_id_index', ['formId'], {})
@Index('google_form_utms_status_index', ['status'], {})
@Index('google_form_utms_url_index', ['url'], {})
@Index('google_form_utms_user_id_index', ['userId'], {})
@Index('google_form_utms_utm_index', ['utm'], {})
@Entity('google_form_utms', { schema: 'modema' })
export class GoogleFormUtm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', { name: 'form_id', length: 191 })
  formId: string;

  @Column('varchar', { name: 'url', length: 191 })
  url: string;

  @Column('varchar', { name: 'utm', length: 191 })
  utm: string;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'0'" })
  status: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
