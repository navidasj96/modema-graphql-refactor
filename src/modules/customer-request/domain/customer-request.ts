import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CustomerRequest {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  uuid?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
