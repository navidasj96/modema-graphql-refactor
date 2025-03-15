import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
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
