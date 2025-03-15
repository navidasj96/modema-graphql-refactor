import { Module } from '@nestjs/common';
import { PaymentMethodFieldService } from './payment-method-field.service';
import { PaymentMethodFieldResolver } from './payment-method-field.resolver';
import { PaymentMethodField } from '@/modules/payment-method-field/entities/payment-method-field.entity';
import { PaymentMethodField as PaymentMethodFieldGraphQL } from '@/modules/payment-method-field/domain/payment-method-field';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePaymentMethodFieldInput } from '@/modules/payment-method-field/dto/create-payment-method-field.input';

@Module({
  providers: [PaymentMethodFieldResolver, PaymentMethodFieldService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PaymentMethodField])],
      resolvers: [
        {
          EntityClass: PaymentMethodField,
          DTOClass: PaymentMethodFieldGraphQL,
          CreateDTOClass: CreatePaymentMethodFieldInput,
        },
      ],
    }),
  ],
})
export class PaymentMethodFieldModule {}
