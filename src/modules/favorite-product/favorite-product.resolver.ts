import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FavoriteProductService } from './favorite-product.service';
import { CreateFavoriteProductInput } from './dto/create-favorite-product.input';
import { UpdateFavoriteProductInput } from './dto/update-favorite-product.input';
import { FavoriteProduct } from './domain/favorite-product';

@Resolver(() => FavoriteProduct)
export class FavoriteProductResolver {
  constructor(
    private readonly favoriteProductService: FavoriteProductService,
  ) {}

  @Mutation(() => FavoriteProduct)
  createFavoriteProduct(
    @Args('createFavoriteProductInput')
    createFavoriteProductInput: CreateFavoriteProductInput,
  ) {
    return this.favoriteProductService.create(createFavoriteProductInput);
  }

  @Query(() => [FavoriteProduct], { name: 'favoriteProduct' })
  findAll() {
    return this.favoriteProductService.findAll();
  }

  @Query(() => FavoriteProduct, { name: 'favoriteProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.favoriteProductService.findOne(id);
  }

  @Mutation(() => FavoriteProduct)
  updateFavoriteProduct(
    @Args('updateFavoriteProductInput')
    updateFavoriteProductInput: UpdateFavoriteProductInput,
  ) {
    return this.favoriteProductService.update(
      updateFavoriteProductInput.id,
      updateFavoriteProductInput,
    );
  }

  @Mutation(() => FavoriteProduct)
  removeFavoriteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.favoriteProductService.remove(id);
  }
}
