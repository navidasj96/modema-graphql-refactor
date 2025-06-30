import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceProductItemsListInput {
  @Field(() => Boolean, { nullable: true })
  isShaggy?: boolean;

  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  rollReferenceCode?: string;

  @Field(() => Number, { nullable: true })
  offset: number;

  @Field(() => Number, { nullable: true })
  limit: number;
}
