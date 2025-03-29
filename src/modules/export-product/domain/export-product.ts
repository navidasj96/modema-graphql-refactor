import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('ExportProductDomain')
@ObjectType()
export class ExportProduct {
  @IDField(() => ID)
  id: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  price?: number;
}
