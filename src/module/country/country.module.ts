import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Country } from './entities/country.entity';
import { Country as CountryGraphQL } from './domain/country';
import { CreateCountryInput } from './dto/create-country.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Country])],
      resolvers: [
        {
          EntityClass: Country,
          DTOClass: CountryGraphQL,
          CreateDTOClass: CreateCountryInput,
        },
      ],
    }),
  ],
})
export class CountryModule {}
