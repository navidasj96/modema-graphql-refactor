import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentRequestStatusService } from './payment-request-status.service';
import { CreatePaymentRequestStatusInput } from './dto/create-payment-request-status.input';
import { UpdatePaymentRequestStatusInput } from './dto/update-payment-request-status.input';
import { PaymentRequestStatus } from '@/modules/payment-request-status/domain/payment-request-status';

@Resolver(() => PaymentRequestStatus)
export class PaymentRequestStatusResolver {
  constructor(
    private readonly paymentRequestStatusService: PaymentRequestStatusService,
  ) {}

  @Mutation(() => PaymentRequestStatus)
  createPaymentRequestStatus(
    @Args('createPaymentRequestStatusInput')
    createPaymentRequestStatusInput: CreatePaymentRequestStatusInput,
  ) {
    return this.paymentRequestStatusService.create(
      createPaymentRequestStatusInput,
    );
  }

  @Query(() => [PaymentRequestStatus], { name: 'paymentRequestStatus' })
  findAll() {
    return this.paymentRequestStatusService.findAll();
  }

  @Query(() => PaymentRequestStatus, { name: 'paymentRequestStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentRequestStatusService.findOne(id);
  }

  @Mutation(() => PaymentRequestStatus)
  updatePaymentRequestStatus(
    @Args('updatePaymentRequestStatusInput')
    updatePaymentRequestStatusInput: UpdatePaymentRequestStatusInput,
  ) {
    return this.paymentRequestStatusService.update(
      updatePaymentRequestStatusInput.id,
      updatePaymentRequestStatusInput,
    );
  }

  @Mutation(() => PaymentRequestStatus)
  removePaymentRequestStatus(@Args('id', { type: () => Int }) id: number) {
    return this.paymentRequestStatusService.remove(id);
  }
}
