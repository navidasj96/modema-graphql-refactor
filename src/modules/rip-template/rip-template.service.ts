import { Injectable } from '@nestjs/common';
import { CreateRipTemplateInput } from './dto/create-rip-template.input';
import { UpdateRipTemplateInput } from './dto/update-rip-template.input';
import { UpdateRipTemplateProvider } from '@/modules/rip-template/providers/update-rip-template.provider';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

@Injectable()
export class RipTemplateService {
  constructor(
    /**
     * inject UpdateRipTemplateProvider
     */
    private readonly updateRipTemplateProvider: UpdateRipTemplateProvider
  ) {}
  create(createRipTemplateInput: CreateRipTemplateInput) {
    return 'This action adds a new ripTemplate';
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
