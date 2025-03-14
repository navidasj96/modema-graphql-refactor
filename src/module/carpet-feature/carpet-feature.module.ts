import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetFeature } from './entities/carpet-feature.entity';
import { CarpetFeature as CarpetFeatureGraphQL } from './domain/carpet-feature';
import { CreateCarpetFeatureInput } from './dto/create-carpet-feature.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetFeature])],
      resolvers: [
        {
          EntityClass: CarpetFeature,
          DTOClass: CarpetFeatureGraphQL,
          CreateDTOClass: CreateCarpetFeatureInput,
        },
      ],
    }),
  ],
})
export class CarpetFeatureModule {}
