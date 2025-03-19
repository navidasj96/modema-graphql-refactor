import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CampaignUefaEuroSubscriberHistory } from '@/modules/campaign-uefa-euro-subscriber-history/domain/campaign-uefa-euro-subscriber-history';
import { CampaignUefaEuroSubscriber } from '@/modules/campaign-uefa-euro-subscriber/domain/campaign-uefa-euro-subscriber';
import { ContactFormHistory } from '@/modules/contact-form-history/domain/contact-form-history';
import { ContactForm } from '@/modules/contact-form/domain/contact-form';

@ObjectType()
export class ContactFormStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CampaignUefaEuroSubscriberHistory])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistory[];

  @Field(() => [CampaignUefaEuroSubscriber])
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscriber[];

  @Field(() => [ContactFormHistory])
  contactFormHistories: ContactFormHistory[];

  @Field(() => [ContactForm])
  contactForms: ContactForm[];
}
