import { Module } from '@nestjs/common';
import { ReturnReasonService } from './return-reason.service';
import { ReturnReasonResolver } from './return-reason.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnReason } from '@/modules/return-reason/entities/return-reason.entity';
import { ReturnReason as ReturnReasonGraphQL } from '@/modules/return-reason/domain/return-reason';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnReasonInput } from '@/modules/return-reason/dto/create-return-reason.input';

@Module({
  providers: [ReturnReasonResolver, ReturnReasonService],
  imports: [
    TypeOrmModule.forFeature([ReturnReason]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnReason])],
      resolvers: [
        {
          EntityClass: ReturnReason,
          DTOClass: ReturnReasonGraphQL,
          CreateDTOClass: CreateReturnReasonInput,
        },
      ],
    }),
  ],
})
export class ReturnReasonModule {}
