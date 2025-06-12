import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetUsagePlaceInvoiceProduct } from '@/modules/carpet-usage-place-invoice-product/entities/carpet-usage-place-invoice-product.entity';
import { CarpetUsagePlaceUser } from '@/modules/carpet-usage-place-user/entities/carpet-usage-place-user.entity';

@Index('carpet_usage_places_sort_order_index', ['sortOrder'], {})
@Entity('carpet_usage_places', { schema: 'modema' })
export class CarpetUsagePlace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', length: 191 })
  title: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => CarpetUsagePlaceInvoiceProduct,
    (carpetUsagePlaceInvoiceProduct) =>
      carpetUsagePlaceInvoiceProduct.carpetUsagePlace
  )
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProduct[];

  @OneToMany(
    () => CarpetUsagePlaceUser,
    (carpetUsagePlaceUser) => carpetUsagePlaceUser.carpetUsagePlace
  )
  carpetUsagePlaceUsers: CarpetUsagePlaceUser[];
}
