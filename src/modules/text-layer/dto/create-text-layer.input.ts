import { Field, InputType } from '@nestjs/graphql';
import { Design } from '@/modules/design/domain/design';

@InputType('CreateTextLayerInput')
export class CreateTextLayerInput {
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

  @Field({ nullable: true })
  fontName?: string;

  @Field({ nullable: true })
  text?: string;

  @Field({ nullable: true })
  lineSpacing?: number;

  @Field({ nullable: true })
  letterSpacing?: number;

  @Field({ nullable: true })
  alignment?: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Design)
  design: Design;
}
