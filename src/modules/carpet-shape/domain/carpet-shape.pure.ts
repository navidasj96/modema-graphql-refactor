import { DesignPure } from '@/modules/design/domain/design.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetShapePureDomain')
@ObjectType()
export class CarpetShapePure {
  @Field(() => ID)
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

  @Field(() => [DesignPure])
  designs: DesignPure[];
}
