import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CustomerRequestFile } from './entities/customer-request-file.entity';
import { CustomerRequestFile as CustomerRequestFileGraphQL } from './domain/customer-request-file';
import { CreateCustomerRequestFileInput } from './dto/create-customer-request-file.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerRequestFile])],
      resolvers: [
        {
          EntityClass: CustomerRequestFile,
          DTOClass: CustomerRequestFileGraphQL,
          CreateDTOClass: CreateCustomerRequestFileInput,
        },
      ],
    }),
  ],
})
export class CustomerRequestFileModule {}
