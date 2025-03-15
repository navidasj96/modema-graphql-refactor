import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceProductStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  step?: number;

  @Field({ nullable: true })
  stepShaggy?: number;

  @Field()
  color: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
