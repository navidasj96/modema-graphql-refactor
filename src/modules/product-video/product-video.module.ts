import { Module } from '@nestjs/common';
import { ProductVideoService } from './product-video.service';
import { ProductVideoResolver } from './product-video.resolver';
import { ProductVideo } from '@/modules/product-video/entities/product-video.entity';
import { ProductVideo as ProductVideoGraphQL } from '@/modules/product-video/domain/product-video';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateProductVideoInput } from '@/modules/product-video/dto/create-product-video.input';

@Module({
  providers: [ProductVideoResolver, ProductVideoService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductVideo])],
      resolvers: [
        {
          EntityClass: ProductVideo,
          DTOClass: ProductVideoGraphQL,
          CreateDTOClass: CreateProductVideoInput,
        },
      ],
    }),
  ],
})
export class ProductVideoModule {}
