import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice_statuses', { schema: 'modema' })
export class InvoiceStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('varchar', { name: 'color', nullable: true, length: 191 })
  color?: string;

  @Column('text', { name: 'notification_numbers', nullable: true })
  notificationNumbers?: string;

  @Column('text', { name: 'notification_emails', nullable: true })
  notificationEmails?: string;

  @Column('tinyint', {
    name: 'sms_to_customer',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  smsToCustomer?: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
