import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('CampaignInstagramFollowPureDomain')
@ObjectType()
export class CampaignInstagramFollowPure {
  @Field(() => ID)
  id: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  phoneVerified: boolean;

  @Field(() => Int, { nullable: true })
  birthYear?: number;

  @Field(() => Int, { nullable: true })
  sex?: number;

  @Field(() => Int, { nullable: true })
  answerNo?: number;

  @Field({ nullable: true })
  image1?: string;

  @Field({ nullable: true })
  image2?: string;

  @Field({ nullable: true })
  verificationCode?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure)
  user: UserPure;
}
