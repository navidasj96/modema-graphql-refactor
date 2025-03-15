import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarpetFeatureUserInput {
  @Field()
  id: number;

  @Field()
  carpetFeatureId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
