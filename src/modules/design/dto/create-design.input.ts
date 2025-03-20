import { Field, InputType } from '@nestjs/graphql';
import { CarpetMaterial } from '@/modules/carpet-material/domain/carpet-material';
import { CarpetShape } from '@/modules/carpet-shape/domain/carpet-shape';
import { User } from '@/modules/user/domain/user';
import { ImageLayer } from '@/modules/image-layer/domain/image-layer';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { PatternLayer } from '@/modules/pattern-layer/domain/pattern-layer';
import { TextLayer } from '@/modules/text-layer/domain/text-layer';
import { UserCart } from '@/modules/user-cart/domain/user-cart';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@InputType('CreateDesignInput')
export class CreateDesignInput {
  @Field()
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

  @Field(() => CarpetMaterial)
  carpetMaterial: CarpetMaterial;

  @Field(() => CarpetShape)
  carpetShape: CarpetShape;

  @Field(() => User)
  user: User;

  @Field(() => [ImageLayer])
  imageLayers: ImageLayer[];

  @Field(() => [InvoiceProductHistory])
  invoiceProductHistories: InvoiceProductHistory[];

  @Field(() => [InvoiceProduct])
  invoiceProducts: InvoiceProduct[];

  @Field(() => [PatternLayer])
  patternLayers: PatternLayer[];

  @Field(() => [TextLayer])
  textLayers: TextLayer[];

  @Field(() => [UserCart])
  userCarts: UserCart[];
}
