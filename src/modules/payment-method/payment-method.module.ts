import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodResolver } from './payment-method.resolver';
import { PaymentMethod } from '@/modules/payment-method/entities/payment-method.entity';
import { PaymentMethod as PaymentMethodGraphQL } from '@/modules/payment-method/domain/payment-method';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePaymentMethodInput } from '@/modules/payment-method/dto/create-payment-method.input';

@Module({
  providers: [PaymentMethodResolver, PaymentMethodService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PaymentMethod])],
      resolvers: [
        {
          EntityClass: PaymentMethod,
          DTOClass: PaymentMethodGraphQL,
          CreateDTOClass: CreatePaymentMethodInput,
        },
      ],
    }),
  ],
})
export class PaymentMethodModule {}
