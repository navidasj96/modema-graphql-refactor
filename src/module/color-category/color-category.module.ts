import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ColorCategory } from './entities/color-category.entity';
import { ColorCategory as ColorCategoryGraphQL } from './domain/color-category';
import { CreateColorCategoryInput } from './dto/create-color-category.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ColorCategory])],
      resolvers: [
        {
          EntityClass: ColorCategory,
          DTOClass: ColorCategoryGraphQL,
          CreateDTOClass: CreateColorCategoryInput,
        },
      ],
    }),
  ],
})
export class ColorCategoryModule {}
