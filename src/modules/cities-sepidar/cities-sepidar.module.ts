import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CitiesSepidar } from './entities/cities-sepidar.entity';
import { CitiesSepidar as CitiesSepidarGraphQL } from './domain/cities-sepidar';
import { CreateCitiesSepidarInput } from './dto/create-cities-sepidar.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CitiesSepidar])],
      resolvers: [
        {
          EntityClass: CitiesSepidar,
          DTOClass: CitiesSepidarGraphQL,
          CreateDTOClass: CreateCitiesSepidarInput,
        },
      ],
    }),
  ],
})
export class CitiesSepidarModule {}
