import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentMethodFieldService } from './payment-method-field.service';
import { CreatePaymentMethodFieldInput } from './dto/create-payment-method-field.input';
import { UpdatePaymentMethodFieldInput } from './dto/update-payment-method-field.input';
import { PaymentMethodField } from '@/modules/payment-method-field/domain/payment-method-field';

@Resolver(() => PaymentMethodField)
export class PaymentMethodFieldResolver {
  constructor(
    private readonly paymentMethodFieldService: PaymentMethodFieldService,
  ) {}

  @Mutation(() => PaymentMethodField)
  createPaymentMethodField(
    @Args('createPaymentMethodFieldInput')
    createPaymentMethodFieldInput: CreatePaymentMethodFieldInput,
  ) {
    return this.paymentMethodFieldService.create(createPaymentMethodFieldInput);
  }

  @Query(() => [PaymentMethodField], { name: 'paymentMethodField' })
  findAll() {
    return this.paymentMethodFieldService.findAll();
  }

  @Query(() => PaymentMethodField, { name: 'paymentMethodField' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentMethodFieldService.findOne(id);
  }

  @Mutation(() => PaymentMethodField)
  updatePaymentMethodField(
    @Args('updatePaymentMethodFieldInput')
    updatePaymentMethodFieldInput: UpdatePaymentMethodFieldInput,
  ) {
    return this.paymentMethodFieldService.update(
      updatePaymentMethodFieldInput.id,
      updatePaymentMethodFieldInput,
    );
  }

  @Mutation(() => PaymentMethodField)
  removePaymentMethodField(@Args('id', { type: () => Int }) id: number) {
    return this.paymentMethodFieldService.remove(id);
  }
}
