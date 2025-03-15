import { Module } from '@nestjs/common';
import { MellatPaymentErrorService } from './mellat-payment-error.service';
import { MellatPaymentErrorResolver } from './mellat-payment-error.resolver';
import { MellatPaymentError } from '@/modules/mellat-payment-error/entities/mellat-payment-error.entity';
import { MellatPaymentError as MellatPaymentErrorGraphQL } from '@/modules/mellat-payment-error/domain/mellat-payment-error';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateMellatPaymentErrorInput } from '@/modules/mellat-payment-error/dto/create-mellat-payment-error.input';

@Module({
  providers: [MellatPaymentErrorResolver, MellatPaymentErrorService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([MellatPaymentError])],
      resolvers: [
        {
          EntityClass: MellatPaymentError,
          DTOClass: MellatPaymentErrorGraphQL,
          CreateDTOClass: CreateMellatPaymentErrorInput,
        },
      ],
    }),
  ],
})
export class MellatPaymentErrorModule {}
