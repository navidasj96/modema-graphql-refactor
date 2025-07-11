import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceProductItemRipToPrintInput {
  @Field(() => Number, { nullable: true })
  printRipId?: number;
}
