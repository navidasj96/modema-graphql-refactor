import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '@/modules/user/entities/user.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/entities/preorder-preorder-status.entity';
import { PreorderStatus } from '@/modules/preorder-status/entities/preorder-status.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Index('preorders_assigned_user_id_index', ['assignedUserId'], {})
@Index('preorders_preorder_status_id_index', ['preorderStatusId'], {})
@Index('preorders_product_id_index', ['productId'], {})
@Index('preorders_sales_person_id_index', ['salesPersonId'], {})
@Index('preorders_subproduct_id_index', ['subproductId'], {})
@Index('preorders_user_id_index', ['userId'], {})
@Entity('preorders', { schema: 'modema' })
export class Preorder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'preorder_status_id', unsigned: true })
  preorderStatusId: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('text', { name: 'customer_description', nullable: true })
  customerDescription?: string;

  @Column('text', { name: 'company_description', nullable: true })
  companyDescription?: string;

  @Column('varchar', { name: 'phone2', nullable: true, length: 191 })
  phone2?: string;

  @Column('varchar', { name: 'tracking_code', nullable: true, length: 191 })
  trackingCode?: string;

  @Column('varchar', { name: 'activation_code', nullable: true, length: 191 })
  activationCode?: string;

  @Column('date', { name: 'date_of_turn', nullable: true })
  dateOfTurn?: string;

  @Column('int', { name: 'activation_send_turn', default: () => "'1000'" })
  activationSendTurn: number;

  @Column('datetime', { name: 'last_call_date', nullable: true })
  lastCallDate?: Date;

  @Column('datetime', { name: 'expiration_date', nullable: true })
  expirationDate?: Date;

  @Column('tinyint', { name: 'is_activated', width: 1, default: () => "'0'" })
  isActivated: boolean;

  @Column('int', { name: 'sales_person_id', nullable: true, unsigned: true })
  salesPersonId?: number;

  @Column('int', { name: 'assigned_user_id', nullable: true, unsigned: true })
  assignedUserId?: number;

  @Column('datetime', { name: 'activation_send_date', nullable: true })
  activationSendDate?: Date;

  @Column('varchar', { name: 'created_at_p', nullable: true, length: 191 })
  createdAtP?: string;

  @Column('varchar', { name: 'date_of_turn_p', nullable: true, length: 191 })
  dateOfTurnP?: string;

  @Column('varchar', {
    name: 'activation_send_date_p',
    nullable: true,
    length: 191,
  })
  activationSendDateP?: string;

  @Column('varchar', { name: 'last_call_date_p', nullable: true, length: 191 })
  lastCallDateP?: string;

  @Column('varchar', { name: 'expiration_date_p', nullable: true, length: 191 })
  expirationDateP?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @OneToMany(
    () => PreorderPreorderStatus,
    (preorderPreorderStatus) => preorderPreorderStatus.preorder
  )
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @ManyToOne(() => User, (user) => user.preorders, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'assigned_user_id', referencedColumnName: 'id' }])
  assignedUser: User;

  @ManyToOne(
    () => PreorderStatus,
    (preorderStatus) => preorderStatus.preorders,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'preorder_status_id', referencedColumnName: 'id' }])
  preorderStatus: PreorderStatus;

  @ManyToOne(() => Product, (product) => product.preorders, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => User, (user) => user.preorders2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'sales_person_id', referencedColumnName: 'id' }])
  salesPerson: User;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.preorders, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;

  @ManyToOne(() => User, (user) => user.preorders3, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
