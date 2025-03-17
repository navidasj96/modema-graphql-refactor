import { Module } from '@nestjs/common';
import { ReturnRequestItemService } from './return-request-item.service';
import { ReturnRequestItemResolver } from './return-request-item.resolver';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { ReturnRequestItem as ReturnRequestItemGraphQL } from '@/modules/return-request-item/domain/return-request-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestItemInput } from '@/modules/return-request-item/dto/create-return-request-item.input';

@Module({
  providers: [ReturnRequestItemResolver, ReturnRequestItemService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnRequestItem])],
      resolvers: [
        {
          EntityClass: ReturnRequestItem,
          DTOClass: ReturnRequestItemGraphQL,
          CreateDTOClass: CreateReturnRequestItemInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestItemModule {}
