import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentMethodField } from '@/modules/payment-method-field/entities/payment-method-field.entity';

@Index('payment_methods_name_unique', ['name'], { unique: true })
@Entity('payment_methods', { schema: 'modema' })
export class PaymentMethod {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @OneToMany(
    () => PaymentMethodField,
    (paymentMethodField) => paymentMethodField.paymentMethod,
  )
  paymentMethodFields: PaymentMethodField[];
}
