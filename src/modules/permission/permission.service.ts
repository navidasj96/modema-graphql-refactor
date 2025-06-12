import { Injectable } from '@nestjs/common';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';
import { Repository } from 'typeorm';
import { Permission } from '@/modules/permission/entities/permission.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionService {
  constructor(
    /**
     * inject permissionRepository
     */
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>
  ) {}

  create(createPermissionInput: CreatePermissionInput) {
    return 'This action adds a new permission';
  }

  findAll() {
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionInput: UpdatePermissionInput) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }

  async findAllBasic(): Promise<Pick<Permission, 'id' | 'name'>[]> {
    return this.permissionRepository.find({
      select: ['id', 'name'],
    });
  }
}
