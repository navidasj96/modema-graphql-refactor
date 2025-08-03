import { CampaignUefaEuroSubscriberHistoryPure } from '@/modules/campaign-uefa-euro-subscriber-history/domain/campaign-uefa-euro-subscriber-history.pure';
import { CampaignUefaEuroSubscriberPure } from '@/modules/campaign-uefa-euro-subscriber/domain/campaign-uefa-euro-subscriber.pure';
import { ContactFormHistoryPure } from '@/modules/contact-form-history/domain/contact-form-history.pure';
import { ContactFormPure } from '@/modules/contact-form/domain/contact-form.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ContactFormStatusPureDomain')
@ObjectType()
export class ContactFormStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CampaignUefaEuroSubscriberHistoryPure])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistoryPure[];

  @Field(() => [CampaignUefaEuroSubscriberPure])
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscriberPure[];

  @Field(() => [ContactFormHistoryPure])
  contactFormHistories: ContactFormHistoryPure[];

  @Field(() => [ContactFormPure])
  contactForms: ContactFormPure[];
}
