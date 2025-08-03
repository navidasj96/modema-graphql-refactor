import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('BasicCarpetDesignPureDomain')
@ObjectType()
export class BasicCarpetDesignPure {
  @Field()
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
