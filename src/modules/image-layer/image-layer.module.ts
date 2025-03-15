import { Module } from '@nestjs/common';
import { ImageLayerService } from './image-layer.service';
import { ImageLayerResolver } from './image-layer.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImageLayer } from '@/modules/image-layer/entities/image-layer.entity';
import { ImageLayer as ImageLayerGraphQL } from '@/modules/image-layer/domain/image-layer';
import { CreateImageLayerInput } from '@/modules/image-layer/dto/create-image-layer.input';

@Module({
  providers: [ImageLayerResolver, ImageLayerService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImageLayer])],
      resolvers: [
        {
          EntityClass: ImageLayer,
          DTOClass: ImageLayerGraphQL,
          CreateDTOClass: CreateImageLayerInput,
        },
      ],
    }),
  ],
})
export class ImageLayerModule {}
