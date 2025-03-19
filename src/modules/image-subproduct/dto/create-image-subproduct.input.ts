import { Field, InputType } from '@nestjs/graphql';
import { Image } from '@/modules/image/domain/image';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateImageSubproductInput {
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

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;
}
