import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ghazals', { schema: 'modema' })
export class Ghazal {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('text', { name: 'explanation', nullable: true })
  explanation?: string;

  @Column('text', { name: 'poem', nullable: true })
  poem?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
