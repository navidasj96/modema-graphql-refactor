import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { OneToMany } from 'typeorm';

@InputType('BasicCarpetBrandPureDomain')
@ObjectType()
export class BasicCarpetBrandPure {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @OneToMany(
    () => SubproductPure,
    (subproductPure) => subproductPure.basicCarpetBrand
  )
  subproducts: SubproductPure[];
}
