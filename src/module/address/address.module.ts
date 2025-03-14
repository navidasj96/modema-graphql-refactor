import { Module } from '@nestjs/common';
import { Address } from './entities/address.entity';
import { Address as AddressGraphQL } from './domain/address';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAddressInput } from './dto/create-address.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Address])],
      resolvers: [
        {
          EntityClass: Address,
          DTOClass: AddressGraphQL,
          CreateDTOClass: CreateAddressInput,
        },
      ],
    }),
  ],
})
export class AddressModule {}
