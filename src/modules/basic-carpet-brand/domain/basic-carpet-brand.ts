import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { OneToMany } from 'typeorm';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class BasicCarpetBrand {
  @IDField(() => ID)
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
