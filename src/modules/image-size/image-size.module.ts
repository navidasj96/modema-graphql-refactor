import { Module } from '@nestjs/common';
import { ImageSizeService } from './image-size.service';
import { ImageSizeResolver } from './image-size.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImageSize } from '@/modules/image-size/entities/image-size.entity';
import { ImageSize as ImageSizeGraphQL } from '@/modules/image-size/domain/image-size';
import { CreateImageSizeInput } from '@/modules/image-size/dto/create-image-size.input';

@Module({
  providers: [ImageSizeResolver, ImageSizeService],
  imports: [
    TypeOrmModule.forFeature([ImageSize]),
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
  ],
})
export class ImageSizeModule {}
