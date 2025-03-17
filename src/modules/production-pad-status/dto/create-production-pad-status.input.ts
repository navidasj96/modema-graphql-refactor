import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductionPadStatusInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  step: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
