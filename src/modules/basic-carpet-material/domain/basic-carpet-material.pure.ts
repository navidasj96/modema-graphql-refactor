import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('BasicCarpetMaterialPureDomain')
@ObjectType()
export class BasicCarpetMaterialPure {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];
}
