import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('HolidayDomain')
@ObjectType()
export class Holiday {
  @IDField(() => ID)
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

  @Field(() => User, { nullable: true })
  user?: User;
}
