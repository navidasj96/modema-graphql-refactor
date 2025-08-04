import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { RipTemplatePure } from '@/modules/rip-template/domain/rip-template.pure';
import { UserPure } from '@/modules/user/domain/user.pure';

@InputType('PrintRipPureDomain')
@ObjectType()
export class PrintRipPure {
  @Field(() => ID)
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

  @Field(() => [InvoiceProductItemPure])
  invoiceProductItems: InvoiceProductItemPure[];

  @Field(() => RipTemplatePure)
  ripTemplate: RipTemplatePure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
