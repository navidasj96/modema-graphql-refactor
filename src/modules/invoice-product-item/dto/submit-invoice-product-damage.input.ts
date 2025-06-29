import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class newProductsInput {
  @Field(() => Number)
  product: number;

  @Field(() => Number)
  color: number;

  @Field(() => Number)
  size: number;

  @Field(() => Number)
  status: number;
}

@InputType()
export class SubmitInvoiceProductDamageInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  damageReasonId: number;

  @Field(() => Number)
  damageType: number;

  @Field(() => [newProductsInput], { nullable: true })
  newProducts:
    | {
        product: number;
        color: number;
        size: number;
        status: number;
      }[]
    | null;
}
