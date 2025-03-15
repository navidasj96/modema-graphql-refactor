import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HeardAboutUsOptionService } from './heard-about-us-option.service';
import { CreateHeardAboutUsOptionInput } from './dto/create-heard-about-us-option.input';
import { UpdateHeardAboutUsOptionInput } from './dto/update-heard-about-us-option.input';
import { HeardAboutUsOption } from './domain/heard-about-us-option';

@Resolver(() => HeardAboutUsOption)
export class HeardAboutUsOptionResolver {
  constructor(
    private readonly heardAboutUsOptionService: HeardAboutUsOptionService,
  ) {}

  @Mutation(() => HeardAboutUsOption)
  createHeardAboutUsOption(
    @Args('createHeardAboutUsOptionInput')
    createHeardAboutUsOptionInput: CreateHeardAboutUsOptionInput,
  ) {
    return this.heardAboutUsOptionService.create(createHeardAboutUsOptionInput);
  }

  @Query(() => [HeardAboutUsOption], { name: 'heardAboutUsOption' })
  findAll() {
    return this.heardAboutUsOptionService.findAll();
  }

  @Query(() => HeardAboutUsOption, { name: 'heardAboutUsOption' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.heardAboutUsOptionService.findOne(id);
  }

  @Mutation(() => HeardAboutUsOption)
  updateHeardAboutUsOption(
    @Args('updateHeardAboutUsOptionInput')
    updateHeardAboutUsOptionInput: UpdateHeardAboutUsOptionInput,
  ) {
    return this.heardAboutUsOptionService.update(
      updateHeardAboutUsOptionInput.id,
      updateHeardAboutUsOptionInput,
    );
  }

  @Mutation(() => HeardAboutUsOption)
  removeHeardAboutUsOption(@Args('id', { type: () => Int }) id: number) {
    return this.heardAboutUsOptionService.remove(id);
  }
}
