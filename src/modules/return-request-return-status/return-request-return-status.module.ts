import { Module } from '@nestjs/common';
import { ReturnRequestReturnStatusService } from './return-request-return-status.service';
import { ReturnRequestReturnStatusResolver } from './return-request-return-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/entities/return-request-return-status.entity';
import { ReturnRequestReturnStatus as ReturnRequestReturnStatusGraphQL } from '@/modules/return-request-return-status/domain/return-request-return-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestReturnStatusInput } from '@/modules/return-request-return-status/dto/create-return-request-return-status.input';

@Module({
  providers: [
    ReturnRequestReturnStatusResolver,
    ReturnRequestReturnStatusService,
  ],
  imports: [
    TypeOrmModule.forFeature([ReturnRequestReturnStatus]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([ReturnRequestReturnStatus]),
      ],
      resolvers: [
        {
          EntityClass: ReturnRequestReturnStatus,
          DTOClass: ReturnRequestReturnStatusGraphQL,
          CreateDTOClass: CreateReturnRequestReturnStatusInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestReturnStatusModule {}
