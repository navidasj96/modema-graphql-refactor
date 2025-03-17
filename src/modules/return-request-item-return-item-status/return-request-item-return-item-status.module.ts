import { Module } from '@nestjs/common';
import { ReturnRequestItemReturnItemStatusService } from './return-request-item-return-item-status.service';
import { ReturnRequestItemReturnItemStatusResolver } from './return-request-item-return-item-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/entities/return-request-item-return-item-status.entity';
import { ReturnRequestItemReturnItemStatus as ReturnRequestItemReturnItemStatusGraphQL } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestItemReturnItemStatusInput } from '@/modules/return-request-item-return-item-status/dto/create-return-request-item-return-item-status.input';

@Module({
  providers: [
    ReturnRequestItemReturnItemStatusResolver,
    ReturnRequestItemReturnItemStatusService,
  ],
  imports: [
    TypeOrmModule.forFeature([ReturnRequestItemReturnItemStatus]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          ReturnRequestItemReturnItemStatus,
        ]),
      ],
      resolvers: [
        {
          EntityClass: ReturnRequestItemReturnItemStatus,
          DTOClass: ReturnRequestItemReturnItemStatusGraphQL,
          CreateDTOClass: CreateReturnRequestItemReturnItemStatusInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestItemReturnItemStatusModule {}
