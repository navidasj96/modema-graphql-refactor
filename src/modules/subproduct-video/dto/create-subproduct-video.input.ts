import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSubproductVideoInput {
  @Field()
  id: number;

  @Field()
  videoId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
