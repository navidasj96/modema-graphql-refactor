import { Module } from '@nestjs/common';
import { ProductColorImageService } from './product-color-image.service';
import { ProductColorImageResolver } from './product-color-image.resolver';
import { ProductColorImage } from '@/modules/product-color-image/entities/product-color-image.entity';
import { ProductColorImage as ProductColorImageGraphQL } from '@/modules/product-color-image/domain/product-color-image';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductColorImageInput } from '@/modules/product-color-image/dto/create-product-color-image.input';

@Module({
  providers: [ProductColorImageResolver, ProductColorImageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductColorImage])],
      resolvers: [
        {
          EntityClass: ProductColorImage,
          DTOClass: ProductColorImageGraphQL,
          CreateDTOClass: CreateProductColorImageInput,
        },
      ],
    }),
  ],
})
export class ProductColorImageModule {}
