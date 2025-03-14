import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';

import { CreateCarpetFeatureUserInput } from './dto/create-carpet-feature-user.input';
import { CarpetFeatureUser } from './entities/carpet-feature-user.entity';
import { CarpetFeatureUser as CarpetFeatureUserGraphQL } from './domain/carpet-feature-user';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetFeatureUser])],
      resolvers: [
        {
          EntityClass: CarpetFeatureUser,
          DTOClass: CarpetFeatureUserGraphQL,
          CreateDTOClass: CreateCarpetFeatureUserInput,
        },
      ],
    }),
  ],
})
export class CarpetFeatureUserModule {}
