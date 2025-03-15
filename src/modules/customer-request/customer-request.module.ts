import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CustomerRequest } from './entities/customer-request.entity';
import { CustomerRequest as CustomerRequestGraphQL } from './domain/customer-request';
import { CreateCustomerRequestInput } from './dto/create-customer-request.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerRequest])],
      resolvers: [
        {
          EntityClass: CustomerRequest,
          DTOClass: CustomerRequestGraphQL,
          CreateDTOClass: CreateCustomerRequestInput,
        },
      ],
    }),
  ],
})
export class CustomerRequestModule {}
