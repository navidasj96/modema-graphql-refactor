import { Module } from '@nestjs/common';
import { ShippingServiceService } from './shipping-service.service';
import { ShippingServiceResolver } from './shipping-service.resolver';
import { ShippingService } from '@/modules/shipping-service/entities/shipping-service.entity';
import { ShippingService as ShippingServiceGraphQL } from '@/modules/shipping-service/domain/shipping-service';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateShippingServiceInput } from '@/modules/shipping-service/dto/create-shipping-service.input';

@Module({
  providers: [ShippingServiceResolver, ShippingServiceService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ShippingService])],
      resolvers: [
        {
          EntityClass: ShippingService,
          DTOClass: ShippingServiceGraphQL,
          CreateDTOClass: CreateShippingServiceInput,
        },
      ],
    }),
  ],
})
export class ShippingServiceModule {}
