import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PrintCarpetPadLabelsInput {
  @Field(() => Number)
  sizeId: number;

  @Field(() => Number)
  startRowNo: number;

  @Field(() => Number)
  endRowNo: number;
}
