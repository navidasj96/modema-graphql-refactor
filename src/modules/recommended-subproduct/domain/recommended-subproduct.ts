import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class RecommendedSubproduct {
  @IDField(() => ID)
  id: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
