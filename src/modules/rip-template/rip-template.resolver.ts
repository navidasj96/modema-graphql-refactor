import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RipTemplateService } from './rip-template.service';
import { CreateRipTemplateInput } from './dto/create-rip-template.input';
import { UpdateRipTemplateInput } from './dto/update-rip-template.input';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';

@Resolver(() => RipTemplate)
export class RipTemplateResolver {
  constructor(private readonly ripTemplateService: RipTemplateService) {}

  @Mutation(() => RipTemplate)
  createRipTemplate(
    @Args('createRipTemplateInput')
    createRipTemplateInput: CreateRipTemplateInput,
  ) {
    return this.ripTemplateService.create(createRipTemplateInput);
  }

  @Query(() => [RipTemplate], { name: 'ripTemplate' })
  findAll() {
    return this.ripTemplateService.findAll();
  }

  @Query(() => RipTemplate, { name: 'ripTemplate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ripTemplateService.findOne(id);
  }

  @Mutation(() => RipTemplate)
  updateRipTemplate(
    @Args('updateRipTemplateInput')
    updateRipTemplateInput: UpdateRipTemplateInput,
  ) {
    return this.ripTemplateService.update(
      updateRipTemplateInput.id,
      updateRipTemplateInput,
    );
  }

  @Mutation(() => RipTemplate)
  removeRipTemplate(@Args('id', { type: () => Int }) id: number) {
    return this.ripTemplateService.remove(id);
  }
}
