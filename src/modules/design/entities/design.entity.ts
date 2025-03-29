import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetMaterial } from '@/modules/carpet-material/entities/carpet-material.entity';
import { CarpetShape } from '@/modules/carpet-shape/entities/carpet-shape.entity';
import { User } from '@/modules/user/entities/user.entity';
import { ImageLayer } from '@/modules/image-layer/entities/image-layer.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { PatternLayer } from '@/modules/pattern-layer/entities/pattern-layer.entity';
import { TextLayer } from '@/modules/text-layer/entities/text-layer.entity';
import { UserCart } from '@/modules/user-cart/entities/user-cart.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';

@Index('carpet_material_id', ['carpetMaterialId'], {})
@Index('designs_carpet_shape_id_index', ['carpetShapeId'], {})
@Index('designs_user_id_index', ['userId'], {})
@Entity('designs', { schema: 'modema' })
export class Design {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', {
    name: 'carpet_shape_id',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  carpetShapeId?: number;

  @Column('int', { name: 'carpet_material_id', nullable: true, unsigned: true })
  carpetMaterialId?: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', {
    name: 'background_color',
    nullable: true,
    length: 191,
    default: () => "'#FFFFFF'",
  })
  backgroundColor?: string;

  @Column('varchar', {
    name: 'border_color',
    nullable: true,
    length: 191,
    default: () => "'#FFFFFF'",
  })
  borderColor?: string;

  @Column('varchar', {
    name: 'fringe_color',
    nullable: true,
    length: 191,
    default: () => "'#FFFFFF'",
  })
  fringeColor?: string;

  @Column('double', {
    name: 'width',
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  width?: number;

  @Column('double', {
    name: 'length',
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  length?: number;

  @Column('varchar', {
    name: 'path',
    nullable: true,
    comment: 'Preview image path',
    length: 191,
    default: () => "'/'",
  })
  path?: string;

  @Column('varchar', {
    name: 'filename',
    nullable: true,
    comment: 'preview image file name',
    length: 191,
  })
  filename?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => CarpetMaterial, (carpetMaterial) => carpetMaterial.designs, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'carpet_material_id', referencedColumnName: 'id' }])
  carpetMaterial: CarpetMaterial;

  @ManyToOne(() => CarpetShape, (carpetShape) => carpetShape.designs, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'carpet_shape_id', referencedColumnName: 'id' }])
  carpetShape: CarpetShape;

  @ManyToOne(() => User, (user) => user.designs, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => ImageLayer, (imageLayer) => imageLayer.design)
  imageLayers: ImageLayer[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.design,
  )
  invoiceProductHistories: InvoiceProductHistory[];

  @OneToMany(() => InvoiceProduct, (invoiceProduct) => invoiceProduct.design)
  invoiceProducts: InvoiceProduct[];

  @OneToMany(() => PatternLayer, (patternLayer) => patternLayer.design)
  patternLayers: PatternLayer[];

  @OneToMany(() => TextLayer, (textLayer) => textLayer.design)
  textLayers: TextLayer[];

  @OneToMany(() => UserCart, (userCarts) => userCarts.design)
  userCarts: UserCart[];
}
