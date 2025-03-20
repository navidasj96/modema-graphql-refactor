import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('CreateInvoiceModeInput')
export class CreateInvoiceModeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];
}
