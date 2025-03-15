import { Injectable } from '@nestjs/common';
import { CreateFavoriteProductInput } from './dto/create-favorite-product.input';
import { UpdateFavoriteProductInput } from './dto/update-favorite-product.input';

@Injectable()
export class FavoriteProductService {
  create(createFavoriteProductInput: CreateFavoriteProductInput) {
    return 'This action adds a new favoriteProduct';
  }

  findAll() {
    return `This action returns all favoriteProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoriteProduct`;
  }

  update(id: number, updateFavoriteProductInput: UpdateFavoriteProductInput) {
    return `This action updates a #${id} favoriteProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoriteProduct`;
  }
}
