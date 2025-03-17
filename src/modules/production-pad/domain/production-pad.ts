import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductionPad {
  @IDField(() => ID)
  id: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  productionPadStatusId: number;

  @Field()
  code: string;

  @Field()
  isUsed: boolean;

  @Field()
  isTagPrinted: boolean;

  @Field({ nullable: true })
  rollRefCode?: string;

  @Field()
  rowNo: number;

  @Field({ nullable: true })
  requestDate?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
