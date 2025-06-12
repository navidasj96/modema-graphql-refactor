import { Resolver } from '@nestjs/graphql';
import { FedexAddressValidationAttributeService } from './fedex-address-validation-attribute.service';
import { FedexAddressValidationAttribute } from './domain/fedex-address-validation-attribute';

@Resolver(() => FedexAddressValidationAttribute)
export class FedexAddressValidationAttributeResolver {
  constructor(
    private readonly fedexAddressValidationAttributeService: FedexAddressValidationAttributeService
  ) {}
}
