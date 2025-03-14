import { Module } from '@nestjs/common';
import { BasicCarpetBrand } from './entities/basic-carpet-brand.entity';
import { BasicCarpetBrand as BasicCarpetBrandGraphQL } from './domain/basic-carpet-brand';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateBasicCarpetBrandInput } from './dto/create-basic-carpet-brand.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetBrand])],
      resolvers: [
        {
          EntityClass: BasicCarpetBrand,
          DTOClass: BasicCarpetBrandGraphQL,
          CreateDTOClass: CreateBasicCarpetBrandInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetBrandModule {}
