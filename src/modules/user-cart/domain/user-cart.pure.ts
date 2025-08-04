import { DesignPure } from '@/modules/design/domain/design.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UserCartPureDomain')
@ObjectType()
export class UserCartPure {
  @Field(() => ID)
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

  @Field(() => DesignPure, { nullable: true })
  design?: DesignPure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;

  @Field(() => ProductPure, { nullable: true })
  relatedProduct?: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  relatedSubproduct?: SubproductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => UserPure)
  user: UserPure;
}
