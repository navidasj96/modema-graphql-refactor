import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('HolidayPureDomain')
@ObjectType()
export class HolidayPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field()
  holidayDate: string;

  @Field()
  weekday: number;

  @Field({ nullable: true })
  userId?: number;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
