import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnTypeService } from './return-type.service';
import { CreateReturnTypeInput } from './dto/create-return-type.input';
import { UpdateReturnTypeInput } from './dto/update-return-type.input';
import { ReturnType } from '@/modules/return-type/domain/return-type';

@Resolver(() => ReturnType)
export class ReturnTypeResolver {
  constructor(private readonly returnTypeService: ReturnTypeService) {}

  @Mutation(() => ReturnType)
  createReturnType(
    @Args('createReturnTypeInput') createReturnTypeInput: CreateReturnTypeInput,
  ) {
    return this.returnTypeService.create(createReturnTypeInput);
  }

  @Query(() => [ReturnType], { name: 'returnType' })
  findAll() {
    return this.returnTypeService.findAll();
  }

  @Query(() => ReturnType, { name: 'returnType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnTypeService.findOne(id);
  }

  @Mutation(() => ReturnType)
  updateReturnType(
    @Args('updateReturnTypeInput') updateReturnTypeInput: UpdateReturnTypeInput,
  ) {
    return this.returnTypeService.update(
      updateReturnTypeInput.id,
      updateReturnTypeInput,
    );
  }

  @Mutation(() => ReturnType)
  removeReturnType(@Args('id', { type: () => Int }) id: number) {
    return this.returnTypeService.remove(id);
  }
}
