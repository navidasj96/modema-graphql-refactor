import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('utm_google_form_coupons_coupon_id_index', ['couponId'], {})
@Index('utm_google_form_coupons_user_id_index', ['userId'], {})
@Entity('utm_google_form_coupons', { schema: 'modema' })
export class UtmGoogleFormCoupon {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', {
    name: 'type',
    length: 191,
    default: () => "'regestered'",
  })
  type: string;

  @Column('int', { name: 'coupon_id', nullable: true, unsigned: true })
  couponId?: number;

  @Column('int', { name: 'row', nullable: true })
  row?: number;

  @Column('varchar', { name: 'utm_link', nullable: true, length: 191 })
  utmLink?: string;

  @Column('varchar', { name: 'short_link', nullable: true, length: 191 })
  shortLink?: string;

  @Column('datetime', { name: 'register_date', nullable: true })
  registerDate?: Date;

  @Column('datetime', { name: 'last_purchase_date', nullable: true })
  lastPurchaseDate?: Date;

  @Column('datetime', { name: 'return_date', nullable: true })
  returnDate?: Date;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
