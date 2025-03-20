import { Field, InputType } from '@nestjs/graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateRecommendedSubproductInput')
export class CreateRecommendedSubproductInput {
  @Field()
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
