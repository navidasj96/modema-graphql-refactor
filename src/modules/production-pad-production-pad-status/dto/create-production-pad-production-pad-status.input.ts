import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductionPadProductionPadStatusInput {
  @Field()
  id: number;

  @Field()
  productionPadId: number;

  @Field()
  productionPadStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
