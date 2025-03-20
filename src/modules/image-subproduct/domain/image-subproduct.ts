import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('ImageSubproductDomain')
@ObjectType()
export class ImageSubproduct {
  @IDField(() => ID)
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
