import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fedex_address_validation_attributes', { schema: 'modema' })
export class FedexAddressValidationAttribute {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'code', length: 191 })
  code: string;

  @Column('tinyint', { name: 'correct_value', width: 1 })
  correctValue: boolean;

  @Column('text', { name: 'description' })
  description: string;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;
}
