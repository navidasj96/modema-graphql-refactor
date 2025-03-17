import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSizeGuideInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
