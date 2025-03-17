import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('subscribers_email_unique', ['email'], { unique: true })
@Entity('subscribers', { schema: 'modema' })
export class Subscriber {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 191,
  })
  email?: string;

  @Column('varchar', { name: 'mobile', nullable: true, length: 191 })
  mobile?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
