import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateProductionRollInput')
export class CreateProductionRollInput {
  @Field()
  rollNumber: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field()
  weight: number;

  @Field()
  isShaggy: number;

  @Field(() => String, { nullable: true })
  billNumber?: string;
}
