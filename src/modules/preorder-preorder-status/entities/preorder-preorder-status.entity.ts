import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('preorder_preorder_status_preorder_id_index', ['preorderId'], {})
@Index(
  'preorder_preorder_status_preorder_status_id_index',
  ['preorderStatusId'],
  {},
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
}
