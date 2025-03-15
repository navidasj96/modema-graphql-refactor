import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('exit_controls_user_id_index', ['userId'], {})
@Entity('exit_controls', { schema: 'modema' })
export class ExitControl {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('date', { name: 'exit_date' })
  exitDate: string;

  @Column('varchar', { name: 'driver_name', length: 191 })
  driverName: string;

  @Column('varchar', { name: 'driver_phone', length: 191 })
  driverPhone: string;

  @Column('varchar', { name: 'plate_no', length: 191 })
  plateNo: string;

  @Column('tinyint', { name: 'is_closed', width: 1, default: () => "'0'" })
  isClosed: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
