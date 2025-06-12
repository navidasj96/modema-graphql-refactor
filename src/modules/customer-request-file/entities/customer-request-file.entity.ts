import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerRequest } from '@/modules/customer-request/entities/customer-request.entity';

@Index(
  'customer_request_files_customer_request_id_index',
  ['customerRequestId'],
  {}
)
@Entity('customer_request_files', { schema: 'modema' })
export class CustomerRequestFile {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'customer_request_id', unsigned: true })
  customerRequestId: number;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => CustomerRequest,
    (customerRequest) => customerRequest.customerRequestFiles,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'customer_request_id', referencedColumnName: 'id' }])
  customerRequest: CustomerRequest;
}
