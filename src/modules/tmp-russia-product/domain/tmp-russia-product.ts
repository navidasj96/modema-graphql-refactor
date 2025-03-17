import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class TmpRussiaProduct {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  productCode?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  sizeCode?: string;

  @Field({ nullable: true })
  borderCode?: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  count?: number;
}
