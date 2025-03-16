import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceTypeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
