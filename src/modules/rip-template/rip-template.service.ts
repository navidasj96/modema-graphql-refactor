import { Injectable } from '@nestjs/common';
import { UpdateRipTemplateInput } from './dto/update-rip-template.input';
import { UpdateRipTemplateProvider } from '@/modules/rip-template/providers/update-rip-template.provider';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreateRipTemplateProvider } from '@/modules/rip-template/providers/create-rip-template.provider';
import { CreateRipTemplateInput } from '@/modules/rip-template/dto/create-rip-template.input';

@Injectable()
export class RipTemplateService {
  constructor(
    /**
     * inject UpdateRipTemplateProvider
     */
    private readonly updateRipTemplateProvider: UpdateRipTemplateProvider,
    /**
     * inject createRipTemplateProvivider
     */
    private readonly createRipTemplateProvider: CreateRipTemplateProvider
  ) {}
  async create(
    createRipTemplateInput: CreateRipTemplateInput,
    context: {
      req: UserContext;
    }
  ) {
    return await this.createRipTemplateProvider.createRipTemplate(
      context,
      createRipTemplateInput
    );
  }

  findAll() {
    return `This action returns all ripTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ripTemplate`;
  }

  async update(
    updateRipTemplateInput: UpdateRipTemplateInput,
    context: {
      req: UserContext;
    }
  ) {
    return await this.updateRipTemplateProvider.updateRipTemplate(
      context,
      updateRipTemplateInput
    );
  }

  remove(id: number) {
    return `This action removes a #${id} ripTemplate`;
  }
}
