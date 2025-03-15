import { Module } from '@nestjs/common';
import { PatternService } from './pattern.service';
import { PatternResolver } from './pattern.resolver';
import { Pattern } from '@/modules/pattern/entities/pattern.entity';
import { Pattern as PatternGraphQL } from '@/modules/pattern/domain/pattern';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePatternInput } from '@/modules/pattern/dto/create-pattern.input';

@Module({
  providers: [PatternResolver, PatternService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Pattern])],
      resolvers: [
        {
          EntityClass: Pattern,
          DTOClass: PatternGraphQL,
          CreateDTOClass: CreatePatternInput,
        },
      ],
    }),
  ],
})
export class PatternModule {}
