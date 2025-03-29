import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from '@/modules/city/entities/city.entity';
import { Country } from '@/modules/country/entities/country.entity';
import { State } from '@/modules/state/entities/state.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Index('basic_carpet_designers_city_id_index', ['cityId'], {})
@Index('basic_carpet_designers_code_unique', ['code'], { unique: true })
@Index('basic_carpet_designers_country_id_index', ['countryId'], {})
@Index('basic_carpet_designers_state_id_index', ['stateId'], {})
@Index('basic_carpet_designers_title_unique', ['title'], { unique: true })
@Index('basic_carpet_designers_user_id_index', ['userId'], {})
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_designers', { schema: 'modema' })
export class BasicCarpetDesigner {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 3 })
  code: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('tinyint', {
    name: 'self_employed',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  selfEmployed?: boolean;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', { name: 'country_id', nullable: true, unsigned: true })
  countryId?: number;

  @Column('int', { name: 'state_id', nullable: true, unsigned: true })
  stateId?: number;

  @Column('int', { name: 'city_id', nullable: true, unsigned: true })
  cityId?: number;

  @Column('varchar', { name: 'facebook_id', nullable: true, length: 191 })
  facebookId?: string;

  @Column('varchar', { name: 'twitter_id', nullable: true, length: 191 })
  twitterId?: string;

  @Column('varchar', { name: 'linkedin_id', nullable: true, length: 191 })
  linkedinId?: string;

  @Column('varchar', { name: 'instagram_id', nullable: true, length: 191 })
  instagramId?: string;

  @Column('varchar', { name: 'header_image', nullable: true, length: 191 })
  headerImage?: string;

  @Column('varchar', { name: 'profile_picture', nullable: true, length: 191 })
  profilePicture?: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('double', {
    name: 'price_percentage',
    nullable: true,
    unsigned: true,
    precision: 22,
    default: () => "'0'",
  })
  pricePercentage?: number;

  @ManyToOne(() => City, (city) => city.basicCarpetDesigners, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'city_id', referencedColumnName: 'id' }])
  city: City;

  @ManyToOne(() => Country, (country) => country.basicCarpetDesigners, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Country;

  @ManyToOne(() => State, (state) => state.basicCarpetDesigners, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: State;

  @ManyToOne(() => User, (user) => user.basicCarpetDesigners, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => Subproduct, (subproduct) => subproduct.basicCarpetDesigner)
  subproducts: Subproduct[];
}
