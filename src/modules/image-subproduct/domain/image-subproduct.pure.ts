import { ImagePure } from '@/modules/image/domain/image.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ImageSubproductPureDomain')
@ObjectType()
export class ImageSubproductPure {
  @Field(() => ID)
  id: number;

  @Field()
  imageId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;
}
