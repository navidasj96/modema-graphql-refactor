import { Module } from '@nestjs/common';
import { ImageSizeService } from './image-size.service';
import { ImageSizeResolver } from './image-size.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImageSize } from '@/modules/image-size/entities/image-size.entity';
import { ImageSize as ImageSizeGraphQL } from '@/modules/image-size/domain/image-size';
import { CreateImageSizeInput } from '@/modules/image-size/dto/create-image-size.input';
import { ProductCategoryModule } from '@/modules/product-category/product-category.module';

@Module({
  providers: [ImageSizeResolver, ImageSizeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImageSize])],
      resolvers: [
        {
          EntityClass: ImageSize,
          DTOClass: ImageSizeGraphQL,
          CreateDTOClass: CreateImageSizeInput,
        },
      ],
    }),
    ProductCategoryModule,
  ],
})
export class ImageSizeModule {}
