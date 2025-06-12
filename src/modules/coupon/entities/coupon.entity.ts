import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CampaignPetForm } from '@/modules/campaign-pet-form/entities/campaign-pet-form.entity';
import { CouponSubject } from '@/modules/coupon-subject/entities/coupon-subject.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/entities/utm-google-form-coupon.entity';

@Index('coupons_code_unique', ['code'], { unique: true })
@Index('coupons_created_by_index', ['createdBy'], {})
@Index('coupons_retargeting_invoice_id_index', ['retargetingInvoiceId'], {})
@Index('coupons_retargeting_user_id_index', ['retargetingUserId'], {})
@Index('coupons_updated_by_index', ['updatedBy'], {})
@Index('coupons_user_id_index', ['userId'], {})
@Entity('coupons', { schema: 'modema' })
export class Coupon {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'code', unique: true, length: 191 })
  code: string;

  @Column('tinyint', {
    name: 'off_type',
    comment: '1=Fixed\r\n2=Percent',
    unsigned: true,
  })
  offType: number;

  @Column('decimal', { name: 'discount', precision: 18, scale: 2 })
  discount: string;

  @Column('datetime', { name: 'start_date' })
  startDate: Date;

  @Column('datetime', { name: 'end_date' })
  endDate: Date;

  @Column('int', {
    name: 'max_usage',
    comment: '0=>unlimited,x>0 => quantity',
    unsigned: true,
    default: () => "'1'",
  })
  maxUsage: number;

  @Column('decimal', {
    name: 'min_invoice_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  minInvoicePrice?: string;

  @Column('decimal', {
    name: 'max_discount_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  maxDiscountPrice?: string;

  @Column('tinyint', {
    name: 'is_applicable_to_discounted_products',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isApplicableToDiscountedProducts?: number;

  @Column('tinyint', {
    name: 'for_old_customers_only',
    width: 1,
    default: () => "'0'",
  })
  forOldCustomersOnly: boolean;

  @Column('tinyint', {
    name: 'for_ready_products_only',
    width: 1,
    default: () => "'0'",
  })
  forReadyProductsOnly: boolean;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', {
    name: 'retargeting_user_id',
    nullable: true,
    unsigned: true,
  })
  retargetingUserId?: number;

  @Column('int', {
    name: 'retargeting_invoice_id',
    nullable: true,
    unsigned: true,
  })
  retargetingInvoiceId?: number;

  @Column('int', { name: 'max_percent', nullable: true })
  maxPercent?: number;

  @Column('tinyint', { name: 'only_for_out_of_stocks', default: () => "'0'" })
  onlyForOutOfStocks: number;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive?: number;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy?: number;

  @Column('int', { name: 'updated_by', nullable: true, unsigned: true })
  updatedBy?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('tinyint', { name: 'only_for_one_item', width: 1 })
  onlyForOneItem: boolean;

  @Column('tinyint', {
    name: 'for_new_customers_only',
    width: 1,
    default: () => "'0'",
  })
  forNewCustomersOnly: boolean;

  @OneToMany(() => CampaignPetForm, (campaignPetForm) => campaignPetForm.coupon)
  campaignPetForms: CampaignPetForm[];

  @OneToMany(() => CouponSubject, (couponSubject) => couponSubject.coupon)
  couponSubjects: CouponSubject[];

  @ManyToOne(() => User, (user) => user.coupons, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'created_by', referencedColumnName: 'id' }])
  createdBy2: User;

  @ManyToOne(() => Invoice, (invoice) => invoice.coupons, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'retargeting_invoice_id', referencedColumnName: 'id' }])
  retargetingInvoice: Invoice;

  @ManyToOne(() => User, (user) => user.coupons2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'retargeting_user_id', referencedColumnName: 'id' }])
  retargetingUser: User;

  @ManyToOne(() => User, (user) => user.coupons3, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'updated_by', referencedColumnName: 'id' }])
  updatedBy2: User;

  @ManyToOne(() => User, (user) => user.coupons4, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => Invoice, (invoices) => invoices.coupon)
  invoices: Invoice[];

  @OneToMany(() => ReturnRequest, (returnRequests) => returnRequests.coupon)
  returnRequests: ReturnRequest[];

  @OneToMany(
    () => UtmGoogleFormCoupon,
    (utmGoogleFormCoupons) => utmGoogleFormCoupons.coupon
  )
  utmGoogleFormCoupons: UtmGoogleFormCoupon[];
}
