import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactForm } from '@/modules/contact-form/entities/contact-form.entity';
import { ContactFormStatus } from '@/modules/contact-form-status/entities/contact-form-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('contact_form_histories_contact_form_id_index', ['contactFormId'], {})
@Index(
  'contact_form_histories_contact_form_status_id_index',
  ['contactFormStatusId'],
  {},
)
@Index('contact_form_histories_user_id_index', ['userId'], {})
@Entity('contact_form_histories', { schema: 'modema' })
export class ContactFormHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'contact_form_id', unsigned: true })
  contactFormId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'contact_form_status_id', unsigned: true })
  contactFormStatusId: number;

  @Column('varchar', { name: 'comment', nullable: true, length: 191 })
  comment?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ContactForm,
    (contactForm) => contactForm.contactFormHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'contact_form_id', referencedColumnName: 'id' }])
  contactForm: ContactForm;

  @ManyToOne(
    () => ContactFormStatus,
    (contactFormStatus) => contactFormStatus.contactFormHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'contact_form_status_id', referencedColumnName: 'id' }])
  contactFormStatus: ContactFormStatus;

  @ManyToOne(() => User, (user) => user.contactFormHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
