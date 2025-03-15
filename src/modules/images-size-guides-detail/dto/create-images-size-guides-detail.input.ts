import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateImagesSizeGuidesDetailInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  sizeGuidesDetailsId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
