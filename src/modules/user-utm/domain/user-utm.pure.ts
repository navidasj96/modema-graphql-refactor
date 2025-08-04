import { UserPure } from '@/modules/user/domain/user.pure';
import { UtmPure } from '@/modules/utm/domain/utm.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UserUtmPureDomain')
@ObjectType()
export class UserUtmPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  utmId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => UtmPure)
  utm: UtmPure;
}
