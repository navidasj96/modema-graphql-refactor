import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Preorder } from '@/modules/preorder/entities/preorder.entity';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/entities/preorder-preorder-status.entity';

@Entity('preorder_statuses', { schema: 'modema' })
export class PreorderStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => PreorderPreorderStatus,
    (preorderPreorderStatus) => preorderPreorderStatus.preorderStatus
  )
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @OneToMany(() => Preorder, (preorder) => preorder.preorderStatus)
  preorders: Preorder[];
}
