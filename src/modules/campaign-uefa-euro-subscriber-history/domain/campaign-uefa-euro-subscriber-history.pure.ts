import { CampaignUefaEuroSubscriberPure } from '@/modules/campaign-uefa-euro-subscriber/domain/campaign-uefa-euro-subscriber.pure';
import { ContactFormStatusPure } from '@/modules/contact-form-status/domain/contact-form-status.pure';
import { UserPure } from '@/modules/user/domain/user';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignUefaEuroSubscriberHistoryPureDomain')
@ObjectType()
export class CampaignUefaEuroSubscriberHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  campaignUefaEuroSubscriberId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  contactFormStatusId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => ContactFormStatusPure)
  contactFormStatus: ContactFormStatusPure;

  @Field(() => CampaignUefaEuroSubscriberPure)
  campaignUefaEuroSubscriber: CampaignUefaEuroSubscriberPure;
}
