import { Field, InputType } from '@nestjs/graphql';
import { ContactFormStatus } from '@/modules/contact-form-status/domain/contact-form-status';
import { User } from '@/modules/user/domain/user';
import { CampaignUefaEuroSubscriberHistory } from '@/modules/campaign-uefa-euro-subscriber-history/domain/campaign-uefa-euro-subscriber-history';

@InputType()
export class CreateCampaignUefaEuroSubscriberInput {
  @Field()
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

  @Field(() => [CampaignUefaEuroSubscriberHistory])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistory[];

  @Field(() => ContactFormStatus)
  contactFormStatus: ContactFormStatus;

  @Field(() => User)
  user: User;
}
