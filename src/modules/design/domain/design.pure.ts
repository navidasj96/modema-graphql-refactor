import { CarpetMaterialPure } from '@/modules/carpet-material/domain/carpet-material.pure';
import { CarpetShapePure } from '@/modules/carpet-shape/domain/carpet-shape.pure';
import { ImageLayerPure } from '@/modules/image-layer/domain/image-layer.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { PatternLayerPure } from '@/modules/pattern-layer/domain/pattern-layer.pure';
import { TextLayerPure } from '@/modules/text-layer/domain/text-layer.pure';
import { UserCartPure } from '@/modules/user-cart/domain/user-cart.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DesignPureDomain')
@ObjectType()
export class DesignPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true, defaultValue: 1 })
  carpetShapeId?: number;

  @Field({ nullable: true })
  carpetMaterialId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true, defaultValue: '#FFFFFF' })
  backgroundColor?: string;

  @Field({ nullable: true, defaultValue: '#FFFFFF' })
  borderColor?: string;

  @Field({ nullable: true, defaultValue: '#FFFFFF' })
  fringeColor?: string;

  @Field({ nullable: true, defaultValue: 0.0 })
  width?: number;

  @Field({ nullable: true, defaultValue: 0.0 })
  length?: number;

  @Field({ nullable: true, defaultValue: '/' })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => CarpetMaterialPure)
  carpetMaterial: CarpetMaterialPure;

  @Field(() => CarpetShapePure)
  carpetShape: CarpetShapePure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [ImageLayerPure])
  imageLayers: ImageLayerPure[];

  @Field(() => [InvoiceProductHistoryPure])
  invoiceProductHistories: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductPure])
  invoiceProducts: InvoiceProductPure[];

  @Field(() => [PatternLayerPure])
  patternLayers: PatternLayerPure[];

  @Field(() => [TextLayerPure])
  textLayers: TextLayerPure[];

  @Field(() => [UserCartPure])
  userCarts: UserCartPure[];
}
