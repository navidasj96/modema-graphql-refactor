import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImageProduct } from '@/modules/image-product/entities/image-product.entity';
import { ImageProduct as ImageProductGraphQL } from '@/modules/image-product/domain/image-product';
import { CreateImageProductInput } from '@/modules/image-product/dto/create-image-product.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImageProduct])],
      resolvers: [
        {
          EntityClass: ImageProduct,
          DTOClass: ImageProductGraphQL,
          CreateDTOClass: CreateImageProductInput,
        },
      ],
    }),
  ],
})
export class ImageProductModule {}
