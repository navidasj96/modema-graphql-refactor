import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('campaign_pet_forms_coupon_id_index', ['couponId'], {})
@Index('campaign_pet_forms_user_id_index', ['userId'], {})
@Entity('campaign_pet_forms', { schema: 'modema' })
export class CampaignPetForm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'pet_name', nullable: true, length: 191 })
  petName?: string;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', {
    name: 'discount_amount',
    unsigned: true,
    default: () => "'0'",
  })
  discountAmount: number;

  @Column('int', {
    name: 'donation_amount',
    unsigned: true,
    default: () => "'0'",
  })
  donationAmount: number;

  @Column('varchar', {
    name: 'path',
    nullable: true,
    length: 191,
    default: () => "'/'",
  })
  path?: string;

  @Column('varchar', { name: 'filename', nullable: true, length: 191 })
  filename?: string;

  @Column('varchar', { name: 'mime', nullable: true, length: 191 })
  mime?: string;

  @Column('varchar', { name: 'original_filename', nullable: true, length: 191 })
  originalFilename?: string;

  @Column('int', { name: 'coupon_id', nullable: true, unsigned: true })
  couponId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
