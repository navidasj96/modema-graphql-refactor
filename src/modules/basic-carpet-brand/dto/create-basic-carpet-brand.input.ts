import { Field, InputType } from '@nestjs/graphql';
import { OneToMany } from 'typeorm';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateBasicCarpetBrandInput')
export class CreateBasicCarpetBrandInput {
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

  @OneToMany(() => Subproduct, (subproduct) => subproduct.basicCarpetBrand)
  subproducts: Subproduct[];
}
