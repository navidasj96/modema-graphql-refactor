import { Module } from '@nestjs/common';
import { ReturnRequestAddressService } from './return-request-address.service';
import { ReturnRequestAddressResolver } from './return-request-address.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { ReturnRequestAddress as ReturnRequestAddressGraphQL } from '@/modules/return-request-address/domain/return-request-address';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestAddressInput } from '@/modules/return-request-address/dto/create-return-request-address.input';

@Module({
  providers: [ReturnRequestAddressResolver, ReturnRequestAddressService],
  imports: [
    TypeOrmModule.forFeature([ReturnRequestAddress]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnRequestAddress])],
      resolvers: [
        {
          EntityClass: ReturnRequestAddress,
          DTOClass: ReturnRequestAddressGraphQL,
          CreateDTOClass: CreateReturnRequestAddressInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestAddressModule {}
