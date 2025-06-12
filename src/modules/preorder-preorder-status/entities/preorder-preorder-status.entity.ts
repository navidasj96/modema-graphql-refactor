import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Preorder } from '@/modules/preorder/entities/preorder.entity';
import { PreorderStatus } from '@/modules/preorder-status/entities/preorder-status.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('preorder_preorder_status_preorder_id_index', ['preorderId'], {})
@Index(
  'preorder_preorder_status_preorder_status_id_index',
  ['preorderStatusId'],
  {}
)
@Index('preorder_preorder_status_user_id_index', ['userId'], {})
@Entity('preorder_preorder_status', { schema: 'modema' })
export class PreorderPreorderStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'preorder_id', unsigned: true })
  preorderId: number;

  @Column('int', { name: 'preorder_status_id', unsigned: true })
  preorderStatusId: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('text', { name: 'company_description', nullable: true })
  companyDescription?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Preorder, (preorder) => preorder.preorderPreorderStatuses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'preorder_id', referencedColumnName: 'id' }])
  preorder: Preorder;

  @ManyToOne(
    () => PreorderStatus,
    (preorderStatus) => preorderStatus.preorderPreorderStatuses,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'preorder_status_id', referencedColumnName: 'id' }])
  preorderStatus: PreorderStatus;

  @ManyToOne(() => User, (user) => user.preorderPreorderStatuses, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
