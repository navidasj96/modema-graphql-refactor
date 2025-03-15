import { CreateInvoiceBankGatewayHistoryInput } from './create-invoice-bank-gateway-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceBankGatewayHistoryInput extends PartialType(CreateInvoiceBankGatewayHistoryInput) {
  @Field(() => Int)
  id: number;
}
