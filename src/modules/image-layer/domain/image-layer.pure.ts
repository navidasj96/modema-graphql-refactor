import { DesignPure } from '@/modules/design/domain/design.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ImageLayerPureDomain')
@ObjectType()
export class ImageLayerPure {
  @Field(() => ID)
  id: number;

  @Field()
  designId: number;

  @Field()
  centerX: number;

  @Field()
  centerY: number;

  @Field()
  scaleX: number;

  @Field()
  scaleY: number;

  @Field()
  sortOrder: number;

  @Field()
  rotation: number;

  @Field()
  filename: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => DesignPure, { nullable: true })
  design?: DesignPure;
}
