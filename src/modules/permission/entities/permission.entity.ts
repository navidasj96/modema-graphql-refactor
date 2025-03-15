import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('permissions_parent_id_index', ['parentId'], {})
@Index('permissions_permission_group_id_index', ['permissionGroupId'], {})
@Entity('permissions', { schema: 'modema' })
export class Permission {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'guard_name', length: 191 })
  guardName: string;

  @Column('int', {
    name: 'permission_group_id',
    nullable: true,
    unsigned: true,
  })
  permissionGroupId?: number;

  @Column('int', { name: 'parent_id', nullable: true, unsigned: true })
  parentId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
