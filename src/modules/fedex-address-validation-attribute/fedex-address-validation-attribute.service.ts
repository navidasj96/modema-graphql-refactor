import { Injectable } from '@nestjs/common';
import { CreateFedexAddressValidationAttributeInput } from './dto/create-fedex-address-validation-attribute.input';
import { UpdateFedexAddressValidationAttributeInput } from './dto/update-fedex-address-validation-attribute.input';

@Injectable()
export class FedexAddressValidationAttributeService {
  create(createFedexAddressValidationAttributeInput: CreateFedexAddressValidationAttributeInput) {
    return 'This action adds a new fedexAddressValidationAttribute';
  }

  findAll() {
    return `This action returns all fedexAddressValidationAttribute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fedexAddressValidationAttribute`;
  }

  update(id: number, updateFedexAddressValidationAttributeInput: UpdateFedexAddressValidationAttributeInput) {
    return `This action updates a #${id} fedexAddressValidationAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} fedexAddressValidationAttribute`;
  }
}
