import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Ghazal } from './entities/ghazal.entity';
import { Ghazal as GhazalGraphQL } from './domain/ghazal';
import { CreateGhazalInput } from './dto/create-ghazal.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Ghazal])],
      resolvers: [
        {
          EntityClass: Ghazal,
          DTOClass: GhazalGraphQL,
          CreateDTOClass: CreateGhazalInput,
        },
      ],
    }),
  ],
})
export class GhazalModule {}
