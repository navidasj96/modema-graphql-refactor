import { forwardRef, Module } from '@nestjs/common';
import { ShippingServiceService } from './shipping-service.service';
import { ShippingServiceResolver } from './shipping-service.resolver';
import { ShippingService } from '@/modules/shipping-service/entities/shipping-service.entity';
import { ShippingService as ShippingServiceGraphQL } from '@/modules/shipping-service/domain/shipping-service';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateShippingServiceInput } from '@/modules/shipping-service/dto/create-shipping-service.input';
import { CreateShipmentChaparProvider } from '@/modules/shipping-service/providers/create-shipment-chapar.provider';
import { InvoiceModule } from '@/modules/invoice/invoice.module';
import { InvoicePaymentModule } from '@/modules/invoice-payment/invoice-payment.module';
import { ExternalApiModule } from '@/modules/external-api/external-api.module';

@Module({
  providers: [
    ShippingServiceResolver,
    ShippingServiceService,
    CreateShipmentChaparProvider,
  ],
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
    InvoicePaymentModule,
    forwardRef(() => InvoiceModule),
    ExternalApiModule,
  ],
  exports: [ShippingServiceService],
})
export class ShippingServiceModule {}
