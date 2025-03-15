import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetSize } from './entities/carpet-size.entity';
import { CarpetSize as CarpetSizeGraphQL } from './domain/carpet-size';
import { CreateCarpetSizeInput } from './dto/create-carpet-size.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetSize])],
      resolvers: [
        {
          EntityClass: CarpetSize,
          DTOClass: CarpetSizeGraphQL,
          CreateDTOClass: CreateCarpetSizeInput,
        },
      ],
    }),
  ],
})
export class CarpetSizeModule {}
