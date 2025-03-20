import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('MellatPaymentErrorDomain')
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
