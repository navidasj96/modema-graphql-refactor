import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarpetUsagePlaceUserInput {
  @Field()
  id: number;

  @Field()
  carpetUsagePlaceId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
