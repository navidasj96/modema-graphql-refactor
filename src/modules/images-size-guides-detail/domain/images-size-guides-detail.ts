import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ImagesSizeGuidesDetail {
  @IDField(() => ID)
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
