import { Module } from '@nestjs/common';
import { CustomerVideoProductService } from './customer-video-product.service';
import { CustomerVideoProductResolver } from './customer-video-product.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CustomerVideoProduct } from './entities/customer-video-product.entity';
import { CustomerVideoProduct as CustomerVideoProductGraphQL } from './domain/customer-video-product';
import { CreateCustomerVideoProductInput } from './dto/create-customer-video-product.input';

@Module({
  providers: [CustomerVideoProductResolver, CustomerVideoProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerVideoProduct])],
      resolvers: [
        {
          EntityClass: CustomerVideoProduct,
          DTOClass: CustomerVideoProductGraphQL,
          CreateDTOClass: CreateCustomerVideoProductInput,
        },
      ],
    }),
  ],
})
export class CustomerVideoProductModule {}
