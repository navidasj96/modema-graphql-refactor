import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';
import { Label } from '@/modules/label/domain/label';

@Resolver(() => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Mutation(() => Label)
  createLabel(@Args('createLabelInput') createLabelInput: CreateLabelInput) {
    return this.labelService.create(createLabelInput);
  }

  @Query(() => [Label], { name: 'label' })
  findAll() {
    return this.labelService.findAll();
  }

  @Query(() => Label, { name: 'label' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labelService.findOne(id);
  }

  @Mutation(() => Label)
  updateLabel(@Args('updateLabelInput') updateLabelInput: UpdateLabelInput) {
    return this.labelService.update(updateLabelInput.id, updateLabelInput);
  }

  @Mutation(() => Label)
  removeLabel(@Args('id', { type: () => Int }) id: number) {
    return this.labelService.remove(id);
  }
}
