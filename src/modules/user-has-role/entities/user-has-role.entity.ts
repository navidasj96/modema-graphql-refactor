import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Role } from '@/modules/role/entities/role.entity';
import { User } from '@/modules/user/entities/user.entity';

@Entity('user_has_roles', { schema: 'modema' })
export class UserHasRole {
  @Column('int', { primary: true, name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { primary: true, name: 'role_id', unsigned: true })
  roleId: number;

  @ManyToOne(() => Role, (role) => role.modelHasRoles, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  role: Role;

  @ManyToOne(() => User, (user) => user.userHasRole, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
