import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('MellatPaymentErrorPureDomain')
@ObjectType()
export class MellatPaymentErrorPure {
  @Field(() => ID)
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
