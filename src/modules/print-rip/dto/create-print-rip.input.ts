import { Field, InputType } from '@nestjs/graphql';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreatePrintRipInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  ripNumber: string;

  @Field()
  ripTemplateId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];

  @Field(() => RipTemplate)
  ripTemplate: RipTemplate;

  @Field(() => User, { nullable: true })
  user?: User;
}
