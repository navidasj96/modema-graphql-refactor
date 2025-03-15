import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ColorCategorySubproduct } from './entities/color-category-subproduct.entity';
import { ColorCategorySubproduct as ColorCategorySubproductGraphQL } from './domain/color-category-subproduct';
import { CreateColorCategorySubproductInput } from './dto/create-color-category-subproduct.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ColorCategorySubproduct])],
      resolvers: [
        {
          EntityClass: ColorCategorySubproduct,
          DTOClass: ColorCategorySubproductGraphQL,
          CreateDTOClass: CreateColorCategorySubproductInput,
        },
      ],
    }),
  ],
})
export class ColorCategorySubproductModule {}
