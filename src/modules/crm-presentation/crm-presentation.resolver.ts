import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrmPresentationService } from './crm-presentation.service';
import { CreateCrmPresentationInput } from './dto/create-crm-presentation.input';
import { UpdateCrmPresentationInput } from './dto/update-crm-presentation.input';
import { CrmPresentation } from './domain/crm-presentation';

@Resolver(() => CrmPresentation)
export class CrmPresentationResolver {
  constructor(
    private readonly crmPresentationService: CrmPresentationService,
  ) {}

  @Mutation(() => CrmPresentation)
  createCrmPresentation(
    @Args('createCrmPresentationInput')
    createCrmPresentationInput: CreateCrmPresentationInput,
  ) {
    return this.crmPresentationService.create(createCrmPresentationInput);
  }

  @Query(() => [CrmPresentation], { name: 'crmPresentation' })
  findAll() {
    return this.crmPresentationService.findAll();
  }

  @Query(() => CrmPresentation, { name: 'crmPresentation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.crmPresentationService.findOne(id);
  }

  @Mutation(() => CrmPresentation)
  updateCrmPresentation(
    @Args('updateCrmPresentationInput')
    updateCrmPresentationInput: UpdateCrmPresentationInput,
  ) {
    return this.crmPresentationService.update(
      updateCrmPresentationInput.id,
      updateCrmPresentationInput,
    );
  }

  @Mutation(() => CrmPresentation)
  removeCrmPresentation(@Args('id', { type: () => Int }) id: number) {
    return this.crmPresentationService.remove(id);
  }
}
