import { Field, InputType } from '@nestjs/graphql';
import { Design } from '@/modules/design/domain/design';

@InputType('CreateImageLayerInput')
export class CreateImageLayerInput {
  @Field()
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

  @Field(() => Design, { nullable: true })
  design?: Design;
}
