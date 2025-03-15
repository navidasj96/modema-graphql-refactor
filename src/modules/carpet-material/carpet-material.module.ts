import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetMaterial } from './entities/carpet-material.entity';
import { CarpetMaterial as CarpetMaterialGraphQL } from './domain/carpet-material';
import { CreateCarpetMaterialInput } from './dto/create-carpet-material.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetMaterial])],
      resolvers: [
        {
          EntityClass: CarpetMaterial,
          DTOClass: CarpetMaterialGraphQL,
          CreateDTOClass: CreateCarpetMaterialInput,
        },
      ],
    }),
  ],
})
export class CarpetMaterialModule {}
