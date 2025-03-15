import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PreorderRegisterService } from './preorder-register.service';
import { CreatePreorderRegisterInput } from './dto/create-preorder-register.input';
import { UpdatePreorderRegisterInput } from './dto/update-preorder-register.input';
import { PreorderRegister } from '@/modules/preorder-register/domain/preorder-register';

@Resolver(() => PreorderRegister)
export class PreorderRegisterResolver {
  constructor(
    private readonly preorderRegisterService: PreorderRegisterService,
  ) {}

  @Mutation(() => PreorderRegister)
  createPreorderRegister(
    @Args('createPreorderRegisterInput')
    createPreorderRegisterInput: CreatePreorderRegisterInput,
  ) {
    return this.preorderRegisterService.create(createPreorderRegisterInput);
  }

  @Query(() => [PreorderRegister], { name: 'preorderRegister' })
  findAll() {
    return this.preorderRegisterService.findAll();
  }

  @Query(() => PreorderRegister, { name: 'preorderRegister' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.preorderRegisterService.findOne(id);
  }

  @Mutation(() => PreorderRegister)
  updatePreorderRegister(
    @Args('updatePreorderRegisterInput')
    updatePreorderRegisterInput: UpdatePreorderRegisterInput,
  ) {
    return this.preorderRegisterService.update(
      updatePreorderRegisterInput.id,
      updatePreorderRegisterInput,
    );
  }

  @Mutation(() => PreorderRegister)
  removePreorderRegister(@Args('id', { type: () => Int }) id: number) {
    return this.preorderRegisterService.remove(id);
  }
}
