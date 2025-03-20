import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateMellatPaymentErrorInput')
export class CreateMellatPaymentErrorInput {
  @Field()
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
