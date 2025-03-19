import { Field, InputType } from '@nestjs/graphql';
import { Design } from '@/modules/design/domain/design';

@InputType()
export class CreateCarpetShapeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  minWidth: number;

  @Field()
  maxWidth: number;

  @Field()
  minLength: number;

  @Field()
  maxLength: number;

  @Field({ defaultValue: true })
  hasLength: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field(() => [Design])
  designs: Design[];
}
