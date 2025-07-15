import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewInvoiceItemForDepotInput {
  @Field(() => Number)
  productId: number;

  @Field(() => Number)
  sizeId: number;

  @Field(() => Number)
  colorId: number;
}

@InputType()
export class CreateNewInvoiceItemForDepotInput {
  @Field(() => [NewInvoiceItemForDepotInput])
  products: NewInvoiceItemForDepotInput[];

  @Field(() => Number, { nullable: true })
  printRipId: number | null;
}
