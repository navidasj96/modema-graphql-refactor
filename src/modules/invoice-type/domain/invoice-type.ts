import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('InvoiceTypeDomain')
@ObjectType()
export class InvoiceType {
  @IDField(() => ID)
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
