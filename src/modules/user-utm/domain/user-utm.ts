import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { Utm } from '@/modules/utm/domain/utm';

@ObjectType()
export class UserUtm {
  @IDField(() => ID)
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
