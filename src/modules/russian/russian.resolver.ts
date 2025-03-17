import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RussianService } from './russian.service';
import { CreateRussianInput } from './dto/create-russian.input';
import { UpdateRussianInput } from './dto/update-russian.input';
import { Russian } from '@/modules/russian/domain/russian';

@Resolver(() => Russian)
export class RussianResolver {
  constructor(private readonly russianService: RussianService) {}

  @Mutation(() => Russian)
  createRussian(
    @Args('createRussianInput') createRussianInput: CreateRussianInput,
  ) {
    return this.russianService.create(createRussianInput);
  }

  @Query(() => [Russian], { name: 'russian' })
  findAll() {
    return this.russianService.findAll();
  }

  @Query(() => Russian, { name: 'russian' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.russianService.findOne(id);
  }

  @Mutation(() => Russian)
  updateRussian(
    @Args('updateRussianInput') updateRussianInput: UpdateRussianInput,
  ) {
    return this.russianService.update(
      updateRussianInput.id,
      updateRussianInput,
    );
  }

  @Mutation(() => Russian)
  removeRussian(@Args('id', { type: () => Int }) id: number) {
    return this.russianService.remove(id);
  }
}
