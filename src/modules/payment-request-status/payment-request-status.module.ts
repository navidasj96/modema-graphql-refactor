import { Module } from '@nestjs/common';
import { PaymentRequestStatusService } from './payment-request-status.service';
import { PaymentRequestStatusResolver } from './payment-request-status.resolver';
import { PaymentRequestStatus } from '@/modules/payment-request-status/entities/payment-request-status.entity';
import { PaymentRequestStatus as PaymentRequestStatusGraphQL } from '@/modules/payment-request-status/domain/payment-request-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePaymentRequestStatusInput } from '@/modules/payment-request-status/dto/create-payment-request-status.input';

@Module({
  providers: [PaymentRequestStatusResolver, PaymentRequestStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PaymentRequestStatus])],
      resolvers: [
        {
          EntityClass: PaymentRequestStatus,
          DTOClass: PaymentRequestStatusGraphQL,
          CreateDTOClass: CreatePaymentRequestStatusInput,
        },
      ],
    }),
  ],
})
export class PaymentRequestStatusModule {}
