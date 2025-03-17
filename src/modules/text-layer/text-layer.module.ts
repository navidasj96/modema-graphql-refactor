import { Module } from '@nestjs/common';
import { TextLayerService } from './text-layer.service';
import { TextLayerResolver } from './text-layer.resolver';
import { TextLayer } from '@/modules/text-layer/entities/text-layer.entity';
import { TextLayer as TextLayerGraphQL } from '@/modules/text-layer/domain/text-layer';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTextLayerInput } from '@/modules/text-layer/dto/create-text-layer.input';

@Module({
  providers: [TextLayerResolver, TextLayerService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TextLayer])],
      resolvers: [
        {
          EntityClass: TextLayer,
          DTOClass: TextLayerGraphQL,
          CreateDTOClass: CreateTextLayerInput,
        },
      ],
    }),
  ],
})
export class TextLayerModule {}
