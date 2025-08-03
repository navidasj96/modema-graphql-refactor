import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('IncredibleOfferSentNotificationPureDomain')
@ObjectType()
export class IncredibleOfferSentNotificationPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
