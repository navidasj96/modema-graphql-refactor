import { Field, InputType } from '@nestjs/graphql';
import { Image } from '@/modules/image/domain/image';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateSubproductSpecialImageInput')
export class CreateSubproductSpecialImageInput {
  @Field()
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

  @Field(() => Image)
  image: Image;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
