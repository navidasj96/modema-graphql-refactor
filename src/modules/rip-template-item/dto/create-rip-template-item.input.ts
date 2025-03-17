import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRipTemplateItemInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  ripTemplateId: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  width: number;

  @Field()
  length: number;
}
