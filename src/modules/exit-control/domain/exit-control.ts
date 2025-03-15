import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ExitControl {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  exitDate: string;

  @Field()
  driverName: string;

  @Field()
  driverPhone: string;

  @Field()
  plateNo: string;

  @Field({ defaultValue: false })
  isClosed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
