import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentRequestService } from './payment-request.service';
import { CreatePaymentRequestInput } from './dto/create-payment-request.input';
import { UpdatePaymentRequestInput } from './dto/update-payment-request.input';
import { PaymentRequest } from '@/modules/payment-request/domain/payment-request';

@Resolver(() => PaymentRequest)
export class PaymentRequestResolver {
  constructor(private readonly paymentRequestService: PaymentRequestService) {}

  @Mutation(() => PaymentRequest)
  createPaymentRequest(
    @Args('createPaymentRequestInput')
    createPaymentRequestInput: CreatePaymentRequestInput,
  ) {
    return this.paymentRequestService.create(createPaymentRequestInput);
  }

  @Query(() => [PaymentRequest], { name: 'paymentRequest' })
  findAll() {
    return this.paymentRequestService.findAll();
  }

  @Query(() => PaymentRequest, { name: 'paymentRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentRequestService.findOne(id);
  }

  @Mutation(() => PaymentRequest)
  updatePaymentRequest(
    @Args('updatePaymentRequestInput')
    updatePaymentRequestInput: UpdatePaymentRequestInput,
  ) {
    return this.paymentRequestService.update(
      updatePaymentRequestInput.id,
      updatePaymentRequestInput,
    );
  }

  @Mutation(() => PaymentRequest)
  removePaymentRequest(@Args('id', { type: () => Int }) id: number) {
    return this.paymentRequestService.remove(id);
  }
}
