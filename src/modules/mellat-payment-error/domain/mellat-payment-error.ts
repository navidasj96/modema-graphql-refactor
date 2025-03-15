import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class MellatPaymentError {
  @IDField(() => ID)
  id: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
