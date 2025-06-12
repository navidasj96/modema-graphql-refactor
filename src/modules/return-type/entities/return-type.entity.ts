import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';

@Index('return_types_name_unique', ['name'], { unique: true })
@Entity('return_types', { schema: 'modema' })
export class ReturnType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.returnType
  )
  returnRequestHistories: ReturnRequestHistory[];

  @OneToMany(() => ReturnRequest, (returnRequest) => returnRequest.returnType)
  returnRequests: ReturnRequest[];
}
