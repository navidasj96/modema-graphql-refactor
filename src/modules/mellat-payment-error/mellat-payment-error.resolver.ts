import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MellatPaymentErrorService } from './mellat-payment-error.service';
import { CreateMellatPaymentErrorInput } from './dto/create-mellat-payment-error.input';
import { MellatPaymentError } from '@/modules/mellat-payment-error/domain/mellat-payment-error';

@Resolver(() => MellatPaymentError)
export class MellatPaymentErrorResolver {
  constructor(
    private readonly mellatPaymentErrorService: MellatPaymentErrorService,
  ) {}

  @Mutation(() => MellatPaymentError)
  createMellatPaymentError(
    @Args('createMellatPaymentErrorInput')
    createMellatPaymentErrorInput: CreateMellatPaymentErrorInput,
  ) {
    return this.mellatPaymentErrorService.create(createMellatPaymentErrorInput);
  }

  @Query(() => [MellatPaymentError], { name: 'mellatPaymentError' })
  findAll() {
    return this.mellatPaymentErrorService.findAll();
  }

  @Query(() => MellatPaymentError, { name: 'mellatPaymentError' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mellatPaymentErrorService.findOne(id);
  }

  // @Mutation(() => MellatPaymentError)
  // updateMellatPaymentError(@Args('updateMellatPaymentErrorInput') updateMellatPaymentErrorInput: UpdateMellatPaymentErrorInput) {
  //   return this.mellatPaymentErrorService.update(updateMellatPaymentErrorInput.id, updateMellatPaymentErrorInput);
  // }

  @Mutation(() => MellatPaymentError)
  removeMellatPaymentError(@Args('id', { type: () => Int }) id: number) {
    return this.mellatPaymentErrorService.remove(id);
  }
}
