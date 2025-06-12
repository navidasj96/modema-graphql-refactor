import { Resolver } from '@nestjs/graphql';
import { MellatPaymentErrorService } from './mellat-payment-error.service';
import { MellatPaymentError } from '@/modules/mellat-payment-error/domain/mellat-payment-error';

@Resolver(() => MellatPaymentError)
export class MellatPaymentErrorResolver {
  constructor(
    private readonly mellatPaymentErrorService: MellatPaymentErrorService
  ) {}
}
