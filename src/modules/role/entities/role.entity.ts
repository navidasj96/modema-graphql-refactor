import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModelHasRole } from '@/modules/model-has-role/entities/model-has-role.entity';
import { Permission } from '@/modules/permission/entities/permission.entity';

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

  @ManyToMany(() => Permission, (permission) => permission.roles)
  permissions: Permission[];
}
