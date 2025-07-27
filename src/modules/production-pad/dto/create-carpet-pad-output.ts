import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PrintCarpetPadLabelsList {
  @Field(() => Number)
  startNo: number;

  @Field(() => Number)
  endNo: number;

  @Field(() => Number)
  count: number;

  @Field(() => Number)
  sizeId: number;
}

@ObjectType()
export class CreateCarpetPadOutput {
  @Field(() => [PrintCarpetPadLabelsList], { nullable: true })
  printCarpetPadLabels: PrintCarpetPadLabelsList[] | null;

  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  status: boolean;
}
