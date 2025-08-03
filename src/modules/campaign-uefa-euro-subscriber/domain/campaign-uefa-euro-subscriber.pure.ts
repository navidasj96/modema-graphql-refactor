import { CampaignUefaEuroSubscriberHistoryPure } from '@/modules/campaign-uefa-euro-subscriber-history/domain/campaign-uefa-euro-subscriber-history';
import { ContactFormStatusPure } from '@/modules/contact-form-status/domain/contact-form-status.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignUefaEuroSubscriberPureDomain')
@ObjectType()
export class CampaignUefaEuroSubscriberPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  mobile: string;

  @Field({ defaultValue: 1 })
  status: number;

  @Field({ defaultValue: 1 })
  contactFormStatusId: number;

  @Field(() => [CampaignUefaEuroSubscriberHistoryPure])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistoryPure[];

  @Field(() => ContactFormStatusPure)
  contactFormStatus: ContactFormStatusPure;

  @Field(() => UserPure)
  user: UserPure;
}
