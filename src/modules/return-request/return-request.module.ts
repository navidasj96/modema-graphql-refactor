import { Module } from '@nestjs/common';
import { ReturnRequestService } from './return-request.service';
import { ReturnRequestResolver } from './return-request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { ReturnRequest as ReturnRequestGraphQL } from '@/modules/return-request/domain/return-request';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestInput } from '@/modules/return-request/dto/create-return-request.input';

@Module({
  providers: [ReturnRequestResolver, ReturnRequestService],
  imports: [
    TypeOrmModule.forFeature([ReturnRequest]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnRequest])],
      resolvers: [
        {
          EntityClass: ReturnRequest,
          DTOClass: ReturnRequestGraphQL,
          CreateDTOClass: CreateReturnRequestInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestModule {}
