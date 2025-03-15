import { Module } from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service';
import { PaymentRequestResolver } from './payment-request.resolver';
import { PaymentRequest } from '@/modules/payment-request/entities/payment-request.entity';
import { PaymentRequest as PaymentRequestGraphQL } from '@/modules/payment-request/domain/payment-request';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePaymentRequestInput } from '@/modules/payment-request/dto/create-payment-request.input';

@Module({
  providers: [PaymentRequestResolver, PaymentRequestService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PaymentRequest])],
      resolvers: [
        {
          EntityClass: PaymentRequest,
          DTOClass: PaymentRequestGraphQL,
          CreateDTOClass: CreatePaymentRequestInput,
        },
      ],
    }),
  ],
})
export class PaymentRequestModule {}
