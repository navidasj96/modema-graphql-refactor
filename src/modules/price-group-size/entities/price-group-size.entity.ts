import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { PriceGroup } from '@/modules/price-group/entities/price-group.entity';

@Index('price_group_size_basic_carpet_size_id_index', ['basicCarpetSizeId'], {})
@Index('price_group_size_bundle_pad_price_index', ['bundlePadPrice'], {})
@Index('price_group_size_bundle_price_index', ['bundlePrice'], {})
@Index('price_group_size_price_group_id_index', ['priceGroupId'], {})
@Entity('price_group_size', { schema: 'modema' })
export class PriceGroupSize {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'price_group_id', unsigned: true })
  priceGroupId: number;

  @Column('int', { name: 'basic_carpet_size_id', unsigned: true })
  basicCarpetSizeId: number;

  @Column('decimal', {
    name: 'price',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  price: string;

  @Column('decimal', {
    name: 'pad_price',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  padPrice: string;

  @Column('decimal', {
    name: 'bundle_price',
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  bundlePrice?: string;

  @Column('decimal', {
    name: 'bundle_pad_price',
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  bundlePadPrice?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.priceGroupSizes,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSize;

  @ManyToOne(() => PriceGroup, (priceGroup) => priceGroup.priceGroupSizes, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'price_group_id', referencedColumnName: 'id' }])
  priceGroup: PriceGroup;
}
