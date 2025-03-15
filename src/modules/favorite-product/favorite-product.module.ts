import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { FavoriteProduct } from './entities/favorite-product.entity';
import { FavoriteProduct as FavoriteProductGraphQL } from './domain/favorite-product';
import { CreateFavoriteProductInput } from './dto/create-favorite-product.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([FavoriteProduct])],
      resolvers: [
        {
          EntityClass: FavoriteProduct,
          DTOClass: FavoriteProductGraphQL,
          CreateDTOClass: CreateFavoriteProductInput,
        },
      ],
    }),
  ],
})
export class FavoriteProductModule {}
