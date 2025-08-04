import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('RecommendedSubproductPureDomain')
@ObjectType()
export class RecommendedSubproductPure {
  @Field(() => ID)
  id: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}
