import { Injectable } from '@nestjs/common';
import { CreateRipTemplateItemInput } from './dto/create-rip-template-item.input';
import { UpdateRipTemplateItemInput } from './dto/update-rip-template-item.input';
import { UpdateRipTemplateItemProvider } from '@/modules/rip-template-item/providers/update-rip-template-item.provider';
import { EntityManager } from 'typeorm';
import { CreateRipTemplateItemsProvider } from '@/modules/rip-template-item/providers/create-rip-template-item.provider';

@Injectable()
export class RipTemplateItemService {
  constructor(
    /**
     * inject UpdateRipTemplateItemProvider
     */
    private readonly updateRipTemplateItemProvider: UpdateRipTemplateItemProvider,
    /**
     * inject createRipTemplateItemProvider
     */
    private readonly createRipTemplateItemsProvider: CreateRipTemplateItemsProvider
  ) {}
  async create(
    updateRipTemplateItemInput: UpdateRipTemplateItemInput,
    manager?: EntityManager
  ) {
    return await this.createRipTemplateItemsProvider.createRipTemplateItems(
      updateRipTemplateItemInput,
      manager
    );
  }

  findAll() {
    return `This action returns all ripTemplateItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ripTemplateItem`;
  }

  async update(
    updateRipTemplateItemInput: UpdateRipTemplateItemInput,
    manager?: EntityManager
  ) {
    return await this.updateRipTemplateItemProvider.updateRipTemplateItem(
      updateRipTemplateItemInput,
      manager
    );
  }

  remove(id: number) {
    return `This action removes a #${id} ripTemplateItem`;
  }
}
