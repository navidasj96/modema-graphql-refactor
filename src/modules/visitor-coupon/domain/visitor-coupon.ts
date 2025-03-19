import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Visitor } from '@/modules/visitor/domain/visitor';

@ObjectType()
export class VisitorCoupon {
  @IDField(() => ID)
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
