import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CampaignUefaEuroSubscriberHistory } from '@/modules/campaign-uefa-euro-subscriber-history/entities/campaign-uefa-euro-subscriber-history.entity';
import { CampaignUefaEuroSubscriber } from '@/modules/campaign-uefa-euro-subscriber/entities/campaign-uefa-euro-subscriber.entity';
import { ContactFormHistory } from '@/modules/contact-form-history/entities/contact-form-history.entity';
import { ContactForm } from '@/modules/contact-form/entities/contact-form.entity';

@Entity('contact_form_statuses', { schema: 'modema' })
export class ContactFormStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => CampaignUefaEuroSubscriberHistory,
    (campaignUefaEuroSubscriberHistory) =>
      campaignUefaEuroSubscriberHistory.contactFormStatus
  )
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistory[];

  @OneToMany(
    () => CampaignUefaEuroSubscriber,
    (campaignUefaEuroSubscriber) => campaignUefaEuroSubscriber.contactFormStatus
  )
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscriber[];

  @OneToMany(
    () => ContactFormHistory,
    (contactFormHistory) => contactFormHistory.contactFormStatus
  )
  contactFormHistories: ContactFormHistory[];

  @OneToMany(() => ContactForm, (contactForm) => contactForm.contactFormStatus)
  contactForms: ContactForm[];
}
