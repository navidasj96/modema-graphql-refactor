import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { Utm } from '@/modules/utm/domain/utm';

@InputType()
export class CreateUserUtmInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  utmId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;

  @Field(() => Utm)
  utm: Utm;
}
