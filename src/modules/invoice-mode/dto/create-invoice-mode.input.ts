import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceModeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
