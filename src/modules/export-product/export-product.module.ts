import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExportProduct } from './entities/export-product.entity';
import { ExportProduct as ExportProductGraphQL } from './domain/export-product';
import { CreateExportProductInput } from './dto/create-export-product.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ExportProduct])],
      resolvers: [
        {
          EntityClass: ExportProduct,
          DTOClass: ExportProductGraphQL,
          CreateDTOClass: CreateExportProductInput,
        },
      ],
    }),
  ],
})
export class ExportProductModule {}
