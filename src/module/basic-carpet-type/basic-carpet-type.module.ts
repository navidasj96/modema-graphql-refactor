import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BasicCarpetType } from './entities/basic-carpet-type.entity';
import { BasicCarpetType as BasicCarpetTypeGraphQL } from './domain/basic-carpet-type';
import { CreateBasicCarpetTypeInput } from './dto/create-basic-carpet-type.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetType])],
      resolvers: [
        {
          EntityClass: BasicCarpetType,
          DTOClass: BasicCarpetTypeGraphQL,
          CreateDTOClass: CreateBasicCarpetTypeInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetTypeModule {}
