import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { City2 } from './entities/city2.entity';
import { City2 as City2GraphQL } from './domain/city2';
import { CreateCity2Input } from './dto/create-city2.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([City2])],
      resolvers: [
        {
          EntityClass: City2,
          DTOClass: City2GraphQL,
          CreateDTOClass: CreateCity2Input,
        },
      ],
    }),
  ],
})
export class City2Module {}
