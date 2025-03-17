import { Module } from '@nestjs/common';
import { ReturnStatusService } from './return-status.service';
import { ReturnStatusResolver } from './return-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnStatus } from '@/modules/return-status/entities/return-status.entity';
import { ReturnStatus as ReturnStatusGraphQL } from '@/modules/return-status/domain/return-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnStatusInput } from '@/modules/return-status/dto/create-return-status.input';

@Module({
  providers: [ReturnStatusResolver, ReturnStatusService],
  imports: [
    TypeOrmModule.forFeature([ReturnStatus]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnStatus])],
      resolvers: [
        {
          EntityClass: ReturnStatus,
          DTOClass: ReturnStatusGraphQL,
          CreateDTOClass: CreateReturnStatusInput,
        },
      ],
    }),
  ],
})
export class ReturnStatusModule {}
