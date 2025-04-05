import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Repository } from 'typeorm';
import { Role } from '@/modules/role/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from '@/modules/permission/entities/permission.entity';

@Injectable()
export class RoleService {
  constructor(
    /**
     * inject roleRepository
     */
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  create(createRoleInput: CreateRoleInput) {
    return 'This action adds a new role';
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }

  async findAllWithPermissions(): Promise<
    Array<{
      id: number;
      name: string;
      permissions: Pick<Permission, 'id' | 'name'>[];
    }>
  > {
    const roles = await this.roleRepository.find({
      relations: ['permissions'],
      select: {
        id: true,
        name: true,
        permissions: {
          id: true,
          name: true,
        },
      },
    });

    return roles;
  }
}
