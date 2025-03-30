import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { Permission } from '@/modules/permission/entities/permission.entity';

@Entity('user_has_permissions', { schema: 'modema' })
export class UserHasPermission {
  @Column('int', { primary: true, name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { primary: true, name: 'permission_id', unsigned: true })
  permissionId: number;

  @ManyToOne(() => Permission, (permission) => permission.userHasPermission, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'permission_id', referencedColumnName: 'id' }])
  permission: Permission;

  @ManyToOne(() => User, (user) => user.userHasPermission, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
