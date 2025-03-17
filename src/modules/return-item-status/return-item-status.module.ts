import { Module } from '@nestjs/common';
import { ReturnItemStatusService } from './return-item-status.service';
import { ReturnItemStatusResolver } from './return-item-status.resolver';
import { ReturnItemStatus } from '@/modules/return-item-status/entities/return-item-status.entity';
import { ReturnItemStatus as ReturnItemStatusGraphQL } from '@/modules/return-item-status/domain/return-item-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnItemStatusInput } from '@/modules/return-item-status/dto/create-return-item-status.input';

@Module({
  providers: [ReturnItemStatusResolver, ReturnItemStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnItemStatus])],
      resolvers: [
        {
          EntityClass: ReturnItemStatus,
          DTOClass: ReturnItemStatusGraphQL,
          CreateDTOClass: CreateReturnItemStatusInput,
        },
      ],
    }),
  ],
})
export class ReturnItemStatusModule {}
