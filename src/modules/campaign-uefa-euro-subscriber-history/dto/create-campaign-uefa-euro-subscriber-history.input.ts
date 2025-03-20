import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { ContactFormStatus } from '@/modules/contact-form-status/domain/contact-form-status';
import { CampaignUefaEuroSubscriber } from '@/modules/campaign-uefa-euro-subscriber/domain/campaign-uefa-euro-subscriber';

@InputType('CreateCampaignUefaEuroSubscriberHistoryInput')
export class CreateCampaignUefaEuroSubscriberHistoryInput {
  @Field()
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

  @Field(() => User)
  user: User;

  @Field(() => ContactFormStatus)
  contactFormStatus: ContactFormStatus;

  @Field(() => CampaignUefaEuroSubscriber)
  campaignUefaEuroSubscriber: CampaignUefaEuroSubscriber;
}
