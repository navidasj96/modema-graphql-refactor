import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TmpSpanishNameService } from './tmp-spanish-name.service';
import { CreateTmpSpanishNameInput } from './dto/create-tmp-spanish-name.input';
import { UpdateTmpSpanishNameInput } from './dto/update-tmp-spanish-name.input';
import { TmpSpanishName } from '@/modules/tmp-spanish-name/domain/tmp-spanish-name';

@Resolver(() => TmpSpanishName)
export class TmpSpanishNameResolver {
  constructor(private readonly tmpSpanishNameService: TmpSpanishNameService) {}

  @Mutation(() => TmpSpanishName)
  createTmpSpanishName(
    @Args('createTmpSpanishNameInput')
    createTmpSpanishNameInput: CreateTmpSpanishNameInput,
  ) {
    return this.tmpSpanishNameService.create(createTmpSpanishNameInput);
  }

  @Query(() => [TmpSpanishName], { name: 'tmpSpanishName' })
  findAll() {
    return this.tmpSpanishNameService.findAll();
  }

  @Query(() => TmpSpanishName, { name: 'tmpSpanishName' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tmpSpanishNameService.findOne(id);
  }

  @Mutation(() => TmpSpanishName)
  updateTmpSpanishName(
    @Args('updateTmpSpanishNameInput')
    updateTmpSpanishNameInput: UpdateTmpSpanishNameInput,
  ) {
    return this.tmpSpanishNameService.update(
      updateTmpSpanishNameInput.id,
      updateTmpSpanishNameInput,
    );
  }

  @Mutation(() => TmpSpanishName)
  removeTmpSpanishName(@Args('id', { type: () => Int }) id: number) {
    return this.tmpSpanishNameService.remove(id);
  }
}
