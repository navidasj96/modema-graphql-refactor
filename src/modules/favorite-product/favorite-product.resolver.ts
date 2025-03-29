import { Resolver } from '@nestjs/graphql';
import { FavoriteProductService } from './favorite-product.service';
import { FavoriteProduct } from './domain/favorite-product';

@Resolver(() => FavoriteProduct)
export class FavoriteProductResolver {
  constructor(
    private readonly favoriteProductService: FavoriteProductService,
  ) {}
}
