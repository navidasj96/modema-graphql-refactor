import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { City } from './entities/city.entity';
import { City as CityGraphQL } from './domain/city';
import { CreateCityInput } from './dto/create-city.input';

@Module({
  providers: [CityResolver, CityService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([City])],
      resolvers: [
        {
          EntityClass: City,
          DTOClass: CityGraphQL,
          CreateDTOClass: CreateCityInput,
        },
      ],
    }),
  ],
})
export class CityModule {}
