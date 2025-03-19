import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { File } from '@/modules/file/entities/file.entity';
import { Negotiation } from '@/modules/negotiation/entities/negotiation.entity';

@Index('file_negotiation_file_id_index', ['fileId'], {})
@Index('file_negotiation_negotiation_id_index', ['negotiationId'], {})
@Entity('file_negotiation', { schema: 'modema' })
export class FileNegotiation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'negotiation_id', unsigned: true })
  negotiationId: number;

  @Column('int', { name: 'file_id', unsigned: true })
  fileId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => File, (file) => file.fileNegotiations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'file_id', referencedColumnName: 'id' }])
  file: File;

  @ManyToOne(() => Negotiation, (negotiation) => negotiation.fileNegotiations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'negotiation_id', referencedColumnName: 'id' }])
  negotiation: Negotiation;
}
