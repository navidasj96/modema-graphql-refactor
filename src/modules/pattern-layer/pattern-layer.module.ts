import { Module } from '@nestjs/common';
import { PatternLayerService } from './pattern-layer.service';
import { PatternLayerResolver } from './pattern-layer.resolver';
import { PatternLayer } from '@/modules/pattern-layer/entities/pattern-layer.entity';
import { PatternLayer as PatternLayerGraphQL } from '@/modules/pattern-layer/domain/pattern-layer';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePatternLayerInput } from '@/modules/pattern-layer/dto/create-pattern-layer.input';

@Module({
  providers: [PatternLayerResolver, PatternLayerService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PatternLayer])],
      resolvers: [
        {
          EntityClass: PatternLayer,
          DTOClass: PatternLayerGraphQL,
          CreateDTOClass: CreatePatternLayerInput,
        },
      ],
    }),
  ],
})
export class PatternLayerModule {}
