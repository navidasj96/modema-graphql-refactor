import { Field, InputType } from '@nestjs/graphql';
import { Design } from '@/modules/design/domain/design';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateUserCartInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  designId?: number;

  @Field()
  count: number;

  @Field()
  bundleCount: number;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  length?: number;

  @Field()
  withPad: boolean;

  @Field({ nullable: true })
  relatedProductId?: number;

  @Field({ nullable: true })
  relatedSubproductId?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Design, { nullable: true })
  design?: Design;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Product, { nullable: true })
  relatedProduct?: Product;

  @Field(() => Subproduct, { nullable: true })
  relatedSubproduct?: Subproduct;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => User)
  user: User;
}
