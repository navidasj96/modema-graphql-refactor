import { Injectable } from '@nestjs/common';
import { CreateCrmPresentationInput } from './dto/create-crm-presentation.input';
import { UpdateCrmPresentationInput } from './dto/update-crm-presentation.input';

@Injectable()
export class CrmPresentationService {
  create(createCrmPresentationInput: CreateCrmPresentationInput) {
    return 'This action adds a new crmPresentation';
  }

  findAll() {
    return `This action returns all crmPresentation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crmPresentation`;
  }

  update(id: number, updateCrmPresentationInput: UpdateCrmPresentationInput) {
    return `This action updates a #${id} crmPresentation`;
  }

  remove(id: number) {
    return `This action removes a #${id} crmPresentation`;
  }
}
