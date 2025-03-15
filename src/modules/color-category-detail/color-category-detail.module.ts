import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ColorCategoryDetail } from './entities/color-category-detail.entity';
import { ColorCategoryDetail as ColorCategoryDetailGraphQL } from './domain/color-category-detail';
import { CreateColorCategoryDetailInput } from './dto/create-color-category-detail.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ColorCategoryDetail])],
      resolvers: [
        {
          EntityClass: ColorCategoryDetail,
          DTOClass: ColorCategoryDetailGraphQL,
          CreateDTOClass: CreateColorCategoryDetailInput,
        },
      ],
    }),
  ],
})
export class ColorCategoryDetailModule {}
