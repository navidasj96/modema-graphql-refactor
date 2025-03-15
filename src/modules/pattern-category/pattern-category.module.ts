import { Module } from '@nestjs/common';
import { PatternCategoryService } from './pattern-category.service';
import { PatternCategoryResolver } from './pattern-category.resolver';
import { PatternCategory } from '@/modules/pattern-category/entities/pattern-category.entity';
import { PatternCategory as PatternCategoryGraphQL } from '@/modules/pattern-category/domain/pattern-category';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePatternCategoryInput } from '@/modules/pattern-category/dto/create-pattern-category.input';

@Module({
  providers: [PatternCategoryResolver, PatternCategoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PatternCategory])],
      resolvers: [
        {
          EntityClass: PatternCategory,
          DTOClass: PatternCategoryGraphQL,
          CreateDTOClass: CreatePatternCategoryInput,
        },
      ],
    }),
  ],
})
export class PatternCategoryModule {}
