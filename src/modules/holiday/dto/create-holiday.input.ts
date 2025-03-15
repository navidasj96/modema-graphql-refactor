import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHolidayInput {
  @Field()
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
}
