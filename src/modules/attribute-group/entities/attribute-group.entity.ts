import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { AttributeItem } from '@/modules/attribute-item/entities/attribute-item.entity';
import { AttributeAttributeGroup } from '@/modules/attribute-attribute-group/entities/attribute-attribute-group.entity';

@Index('attribute_groups_product_category_id_index', ['productCategoryId'], {})
@Entity('attribute_groups', { schema: 'modema' })
export class AttributeGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', {
    name: 'product_category_id',
    nullable: true,
    unsigned: true,
  })
  productCategoryId?: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'general_name', nullable: true, length: 191 })
  generalName?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => AttributeAttributeGroup,
    (attributeAttributeGroup) => attributeAttributeGroup.attributeGroup
  )
  attributeAttributeGroups?: AttributeAttributeGroup[];

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.attributeGroups,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory?: ProductCategory;

  @OneToMany(
    () => AttributeItem,
    (attributeItem) => attributeItem.attributeGroup
  )
  attributeItems?: AttributeItem[];
}
