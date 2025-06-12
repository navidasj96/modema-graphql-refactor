import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelHasRole } from '@/modules/model-has-role/entities/model-has-role.entity';
import { Permission } from '@/modules/permission/entities/permission.entity';
import { RoleHasPermission } from '@/modules/role-has-permission/entities/role-has-permission.entity';
import { UserHasRole } from '@/modules/user-has-role/entities/user-has-role.entity';

@Entity('roles', { schema: 'modema' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'guard_name', length: 191 })
  guardName: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => ModelHasRole, (modelHasRole) => modelHasRole.role)
  modelHasRoles: ModelHasRole[];

  @OneToMany(() => UserHasRole, (UserHasRole) => UserHasRole.role)
  userHasRole: UserHasRole[];

  @ManyToMany(() => Permission, (permission) => permission.roles)
  permissions: Permission[];

  @OneToMany(
    () => RoleHasPermission,
    (RoleHasPermission) => RoleHasPermission.role
  )
  roleHasPermission: RoleHasPermission[];
}
