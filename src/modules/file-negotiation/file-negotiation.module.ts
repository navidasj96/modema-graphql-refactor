import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { FileNegotiation } from './entities/file-negotiation.entity';
import { FileNegotiation as FileNegotiationGraphQL } from './domain/file-negotiation';
import { CreateFileNegotiationInput } from './dto/create-file-negotiation.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([FileNegotiation])],
      resolvers: [
        {
          EntityClass: FileNegotiation,
          DTOClass: FileNegotiationGraphQL,
          CreateDTOClass: CreateFileNegotiationInput,
        },
      ],
    }),
  ],
})
export class FileNegotiationModule {}
