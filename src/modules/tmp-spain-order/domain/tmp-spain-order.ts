import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class TmpSpainOrder {
  @IDField(() => ID)
  row: number;

  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  design?: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  cnt_25?: number;

  @Field({ nullable: true })
  cnt_06?: number;

  @Field({ nullable: true })
  cnt_28?: number;

  @Field({ nullable: true })
  cnt_60?: number;

  @Field({ nullable: true })
  cnt_80?: number;

  @Field({ nullable: true })
  cnt_02?: number;

  @Field({ nullable: true })
  cnt_03?: number;

  @Field({ nullable: true })
  cnt_75?: number;
}
