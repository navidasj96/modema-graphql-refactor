import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceProductStatusInput {
  @Field()
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  step?: number;

  @Field({ nullable: true })
  stepShaggy?: number;

  @Field()
  color: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
