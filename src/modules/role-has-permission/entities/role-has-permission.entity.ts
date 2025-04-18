import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Role } from '@/modules/role/entities/role.entity';
import { Permission } from '@/modules/permission/entities/permission.entity';

@Entity('role_has_permissions', { schema: 'modema' })
export class RoleHasPermission {
  @PrimaryColumn({
    type: 'int',
    name: 'permission_id',
    unsigned: true,
  })
  permissionId: number;

  @PrimaryColumn('int', { name: 'role_id' })
  roleId: number;

  @ManyToOne(() => Role, (role) => role.roleHasPermission, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  role: Role;

  @ManyToOne(() => Permission, (Permission) => Permission.roleHasPermission, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'permission_id', referencedColumnName: 'id' }])
  permission: Permission;
}
