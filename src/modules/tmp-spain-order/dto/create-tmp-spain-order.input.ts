import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTmpSpainOrderInput')
export class CreateTmpSpainOrderInput {
  @Field()
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
