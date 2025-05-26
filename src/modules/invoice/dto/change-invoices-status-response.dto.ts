import { CustomerOtherInvoiceDto } from '@/modules/invoice/dto/CustomerOtherInvoice.dto';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChangeInvoicesStatusResponseDto {
  @Field()
  status: true | false;

  @Field()
  message: string;

  @Field(() => [CustomerOtherInvoiceDto], { nullable: true })
  customerOtherInvoices?: Record<any, any>;
}
