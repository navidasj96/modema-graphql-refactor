import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelHasPermission } from '@/modules/model-has-permission/entities/model-has-permission.entity';
import { PermissionGroup } from '@/modules/permission-group/entities/permission-group.entity';
import { Role } from '@/modules/role/entities/role.entity';
import { RoleHasPermission } from '@/modules/role-has-permission/entities/role-has-permission.entity';

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

  @OneToMany(
    () => ModelHasPermission,
    (modelHasPermission) => modelHasPermission.permission,
  )
  modelHasPermissions: ModelHasPermission[];

  @ManyToOne(() => Permission, (permission) => permission.permissions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'parent_id', referencedColumnName: 'id' }])
  parent: Permission;

  @OneToMany(() => Permission, (permission) => permission.parent)
  permissions: Permission[];

  @ManyToOne(
    () => PermissionGroup,
    (permissionGroups) => permissionGroups.permissions,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'permission_group_id', referencedColumnName: 'id' }])
  permissionGroup: PermissionGroup;

  @ManyToMany(() => Role, (role) => role.permissions)
  @JoinTable({
    name: 'role_has_permissions',
    joinColumns: [{ name: 'permission_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'role_id', referencedColumnName: 'id' }],
    schema: 'modema',
  })
  roles: Role[];

  @OneToMany(
    () => RoleHasPermission,
    (RoleHasPermission) => RoleHasPermission.permission,
  )
  roleHasPermission: RoleHasPermission[];
}
