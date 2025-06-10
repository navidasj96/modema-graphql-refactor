import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateInvoiceProductItemsOutput {
  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  status: boolean;
}
