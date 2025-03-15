import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ImageLayer {
  @IDField(() => ID)
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
}
