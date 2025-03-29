import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType('CreateIncredibleOfferSentNotificationInput')
export class CreateIncredibleOfferSentNotificationInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User, { nullable: true })
  user?: User;
}
