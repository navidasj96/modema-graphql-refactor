import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FedexAddressValidationAttributeService } from './fedex-address-validation-attribute.service';
import { CreateFedexAddressValidationAttributeInput } from './dto/create-fedex-address-validation-attribute.input';
import { UpdateFedexAddressValidationAttributeInput } from './dto/update-fedex-address-validation-attribute.input';
import { FedexAddressValidationAttribute } from './domain/fedex-address-validation-attribute';

@Resolver(() => FedexAddressValidationAttribute)
export class FedexAddressValidationAttributeResolver {
  constructor(
    private readonly fedexAddressValidationAttributeService: FedexAddressValidationAttributeService,
  ) {}

  @Mutation(() => FedexAddressValidationAttribute)
  createFedexAddressValidationAttribute(
    @Args('createFedexAddressValidationAttributeInput')
    createFedexAddressValidationAttributeInput: CreateFedexAddressValidationAttributeInput,
  ) {
    return this.fedexAddressValidationAttributeService.create(
      createFedexAddressValidationAttributeInput,
    );
  }

  @Query(() => [FedexAddressValidationAttribute], {
    name: 'fedexAddressValidationAttribute',
  })
  findAll() {
    return this.fedexAddressValidationAttributeService.findAll();
  }

  @Query(() => FedexAddressValidationAttribute, {
    name: 'fedexAddressValidationAttribute',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fedexAddressValidationAttributeService.findOne(id);
  }

  @Mutation(() => FedexAddressValidationAttribute)
  updateFedexAddressValidationAttribute(
    @Args('updateFedexAddressValidationAttributeInput')
    updateFedexAddressValidationAttributeInput: UpdateFedexAddressValidationAttributeInput,
  ) {
    return this.fedexAddressValidationAttributeService.update(
      updateFedexAddressValidationAttributeInput.id,
      updateFedexAddressValidationAttributeInput,
    );
  }

  @Mutation(() => FedexAddressValidationAttribute)
  removeFedexAddressValidationAttribute(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.fedexAddressValidationAttributeService.remove(id);
  }
}
