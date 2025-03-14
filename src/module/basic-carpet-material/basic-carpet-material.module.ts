import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BasicCarpetMaterial } from './entities/basic-carpet-material.entity';
import { BasicCarpetMaterial as BasicCarpetMaterialGraphQL } from './domain/basic-carpet-material';
import { CreateBasicCarpetMaterialInput } from './dto/create-basic-carpet-material.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetMaterial])],
      resolvers: [
        {
          EntityClass: BasicCarpetMaterial,
          DTOClass: BasicCarpetMaterialGraphQL,
          CreateDTOClass: CreateBasicCarpetMaterialInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetMaterialModule {}
