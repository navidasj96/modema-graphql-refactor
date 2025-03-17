import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserCartService } from './user-cart.service';
import { CreateUserCartInput } from './dto/create-user-cart.input';
import { UpdateUserCartInput } from './dto/update-user-cart.input';
import { UserCart } from '@/modules/user-cart/domain/user-cart';

@Resolver(() => UserCart)
export class UserCartResolver {
  constructor(private readonly userCartService: UserCartService) {}

  @Mutation(() => UserCart)
  createUserCart(
    @Args('createUserCartInput') createUserCartInput: CreateUserCartInput,
  ) {
    return this.userCartService.create(createUserCartInput);
  }

  @Query(() => [UserCart], { name: 'userCart' })
  findAll() {
    return this.userCartService.findAll();
  }

  @Query(() => UserCart, { name: 'userCart' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userCartService.findOne(id);
  }

  @Mutation(() => UserCart)
  updateUserCart(
    @Args('updateUserCartInput') updateUserCartInput: UpdateUserCartInput,
  ) {
    return this.userCartService.update(
      updateUserCartInput.id,
      updateUserCartInput,
    );
  }

  @Mutation(() => UserCart)
  removeUserCart(@Args('id', { type: () => Int }) id: number) {
    return this.userCartService.remove(id);
  }
}
