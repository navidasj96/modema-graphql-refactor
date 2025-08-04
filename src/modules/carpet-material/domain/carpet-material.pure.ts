import { DesignPure } from '@/modules/design/domain/design.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetMaterialPureDomain')
@ObjectType()
export class CarpetMaterialPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  pricePerInch: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [DesignPure])
  designs: DesignPure[];
}
