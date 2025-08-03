import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('BasicCarpetBorderPureDomain')
@ObjectType()
export class BasicCarpetBorderPure {
  @IDField(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];
}
