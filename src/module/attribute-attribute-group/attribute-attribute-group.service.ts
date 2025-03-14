import { Injectable } from '@nestjs/common';
import { CreateAttributeAttributeGroupInput } from './dto/create-attribute-attribute-group.input';
import { UpdateAttributeAttributeGroupInput } from './dto/update-attribute-attribute-group.input';
import { Repository } from 'typeorm';
import { AttributeAttributeGroup } from './entities/attribute-attribute-group.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttributeAttributeGroupService {
  constructor(
    /**
     * Inject attributeAttributeGroupRepository
     */
    @InjectRepository(AttributeAttributeGroup)
    private readonly attributeAttributeGroupRepository: Repository<AttributeAttributeGroup>,
  ) {}

  create(
    createAttributeAttributeGroupInput: CreateAttributeAttributeGroupInput,
  ) {
    return 'This action adds a new attributeAttributeGroup';
  }

  findAll() {
    return `This action returns all attributeAttributeGroup`;
  }

  async findOne(id: number) {
    return await this.attributeAttributeGroupRepository.findOne({
      where: { id },
    });
  }

  update(
    id: number,
    updateAttributeAttributeGroupInput: UpdateAttributeAttributeGroupInput,
  ) {
    return `This action updates a #${id} attributeAttributeGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeAttributeGroup`;
  }
}
