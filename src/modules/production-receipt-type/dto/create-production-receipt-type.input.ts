import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateProductionReceiptTypeInput')
export class CreateProductionReceiptTypeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
