import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('configs_key_unique', ['key'], { unique: true })
@Entity('configs', { schema: 'modema' })
export class Config {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'key', unique: true, length: 191 })
  key: string;

  @Column('varchar', { name: 'value', nullable: true, length: 191 })
  value?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
