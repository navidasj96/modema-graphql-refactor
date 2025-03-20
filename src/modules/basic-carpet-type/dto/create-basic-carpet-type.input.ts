import { Field, InputType } from '@nestjs/graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateBasicCarpetTypeInput')
export class CreateBasicCarpetTypeInput {
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

  @Field(() => [Subproduct])
  subproducts: Subproduct[];
}
