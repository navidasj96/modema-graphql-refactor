import { Module } from '@nestjs/common';
import { ReturnItemStatusReturnRequestItemService } from './return-item-status-return-request-item.service';
import { ReturnItemStatusReturnRequestItemResolver } from './return-item-status-return-request-item.resolver';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/entities/return-item-status-return-request-item.entity';
import { ReturnItemStatusReturnRequestItem as ReturnItemStatusReturnRequestItemGraphgQL } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnItemStatusReturnRequestItemInput } from '@/modules/return-item-status-return-request-item/dto/create-return-item-status-return-request-item.input';

@Module({
  providers: [
    ReturnItemStatusReturnRequestItemResolver,
    ReturnItemStatusReturnRequestItemService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          ReturnItemStatusReturnRequestItem,
        ]),
      ],
      resolvers: [
        {
          EntityClass: ReturnItemStatusReturnRequestItem,
          DTOClass: ReturnItemStatusReturnRequestItemGraphgQL,
          CreateDTOClass: CreateReturnItemStatusReturnRequestItemInput,
        },
      ],
    }),
  ],
})
export class ReturnItemStatusReturnRequestItemModule {}
