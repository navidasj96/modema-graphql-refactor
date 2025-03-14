import { CreateCarpetUsagePlaceInvoiceProductInput } from './create-carpet-usage-place-invoice-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetUsagePlaceInvoiceProductInput extends PartialType(CreateCarpetUsagePlaceInvoiceProductInput) {
  @Field(() => Int)
  id: number;
}
