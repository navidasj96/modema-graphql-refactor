import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class newProductsInput {
  @Field(() => Number)
  productId: number;

  @Field(() => Number)
  subproductId: number;

  @Field(() => Number)
  statusId: number;
}

@InputType()
export class SubmitInvoiceProductDamageInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  damageCause: string;

  @Field(() => Number)
  damageType: number;

  @Field(() => [newProductsInput])
  newProducts: { productId: number; subproductId: number; statusId: number }[];
}
