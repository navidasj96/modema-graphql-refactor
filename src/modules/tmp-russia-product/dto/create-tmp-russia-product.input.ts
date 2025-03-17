import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTmpRussiaProductInput {
  @Field()
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
