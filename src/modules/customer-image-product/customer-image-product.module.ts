import { Module } from '@nestjs/common';
import { CustomerImageProductService } from './customer-image-product.service';
import { CustomerImageProductResolver } from './customer-image-product.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CustomerImageProduct } from './entities/customer-image-product.entity';
import { CustomerImageProduct as CustomerImageProductGraphQL } from './domain/customer-image-product';
import { CreateCustomerImageProductInput } from './dto/create-customer-image-product.input';

@Module({
  providers: [CustomerImageProductResolver, CustomerImageProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerImageProduct])],
      resolvers: [
        {
          EntityClass: CustomerImageProduct,
          DTOClass: CustomerImageProductGraphQL,
          CreateDTOClass: CreateCustomerImageProductInput,
        },
      ],
    }),
  ],
})
export class CustomerImageProductModule {}
