import { Field, InputType } from '@nestjs/graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateBasicCarpetBorderInput {
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

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Subproduct])
  subproducts: Subproduct[];
}
