import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('automation_events_user_id_index', ['userId'], {})
@Entity('automation_events', { schema: 'modema' })
export class AutomationEvent {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: number;

  @Column('tinyint', { name: 'type_id' })
  typeId: number;

  @Column('varchar', { name: 'type', length: 191 })
  type: string;

  @Column('tinyint', { name: 'sms_sent', width: 1, default: () => "'0'" })
  smsSent: boolean;

  @Column('tinyint', {
    name: 'online_sheet_saved',
    width: 1,
    default: () => "'0'",
  })
  onlineSheetSaved: boolean;

  @Column('datetime', { name: 'event_datetime' })
  eventDatetime: Date;

  @Column('datetime', { name: 'trigger_datetime' })
  triggerDatetime: Date;

  @Column('varchar', { name: 'event', length: 191 })
  event: string;

  @Column('varchar', { name: 'event_date', length: 191 })
  eventDate: string;

  @Column('varchar', { name: 'event_timestamp', length: 191 })
  eventTimestamp: string;

  @Column('varchar', { name: 'rfm_score', nullable: true, length: 191 })
  rfmScore?: string;

  @Column('varchar', { name: 'rfm_cat', nullable: true, length: 191 })
  rfmCat?: string;

  @Column('varchar', { name: 'user_name', length: 191 })
  userName: string;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', { name: 'user_uid' })
  userUid: number;

  @Column('varchar', { name: 'user_contact', length: 191 })
  userContact: string;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('varchar', { name: 'last_eec', nullable: true, length: 191 })
  lastEec?: string;

  @Column('text', { name: 'messages', nullable: true })
  messages?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
