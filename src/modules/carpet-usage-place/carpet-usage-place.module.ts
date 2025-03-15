import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetUsagePlace } from './entities/carpet-usage-place.entity';
import { CarpetUsagePlace as CarpetUsagePlaceGraphQL } from './domain/carpet-usage-place';
import { CreateCarpetUsagePlaceInput } from './dto/create-carpet-usage-place.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetUsagePlace])],
      resolvers: [
        {
          EntityClass: CarpetUsagePlace,
          DTOClass: CarpetUsagePlaceGraphQL,
          CreateDTOClass: CreateCarpetUsagePlaceInput,
        },
      ],
    }),
  ],
})
export class CarpetUsagePlaceModule {}
