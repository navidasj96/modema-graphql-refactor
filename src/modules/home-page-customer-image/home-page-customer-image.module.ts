import { Module } from '@nestjs/common';
import { HomePageCustomerImageService } from './home-page-customer-image.service';
import { HomePageCustomerImageResolver } from './home-page-customer-image.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { HomePageCustomerImage } from './entities/home-page-customer-image.entity';
import { HomePageCustomerImage as HomePageCustomerImageGraphQL } from './domain/home-page-customer-image';
import { CreateHomePageCustomerImageInput } from './dto/create-home-page-customer-image.input';

@Module({
  providers: [HomePageCustomerImageResolver, HomePageCustomerImageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([HomePageCustomerImage])],
      resolvers: [
        {
          EntityClass: HomePageCustomerImage,
          DTOClass: HomePageCustomerImageGraphQL,
          CreateDTOClass: CreateHomePageCustomerImageInput,
        },
      ],
    }),
  ],
})
export class HomePageCustomerImageModule {}
