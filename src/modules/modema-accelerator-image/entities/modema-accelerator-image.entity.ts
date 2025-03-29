import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModemaAccelerator } from '@/modules/modema-accelerator/entities/modema-accelerator.entity';

@Index(
  'modema_accelerator_images_modema_accelerator_id_index',
  ['modemaAcceleratorId'],
  {},
)
@Entity('modema_accelerator_images', { schema: 'modema' })
export class ModemaAcceleratorImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'type', length: 191 })
  type: string;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('varchar', { name: 'upload_source', length: 191 })
  uploadSource: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('int', {
    name: 'modema_accelerator_id',
    nullable: true,
    unsigned: true,
  })
  modemaAcceleratorId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ModemaAccelerator,
    (modemaAccelerator) => modemaAccelerator.modemaAcceleratorImages,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'modema_accelerator_id', referencedColumnName: 'id' }])
  modemaAccelerator?: ModemaAccelerator;
}
