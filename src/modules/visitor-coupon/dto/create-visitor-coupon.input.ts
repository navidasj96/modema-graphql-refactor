import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Visitor } from '@/modules/visitor/domain/visitor';

@InputType('CreateVisitorCouponInput')
export class CreateVisitorCouponInput {
  @Field()
  id: number;

  @Field()
  visitorId: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [Invoice])
  invoices: Invoice[];

  @Field(() => Visitor)
  visitor: Visitor;
}
