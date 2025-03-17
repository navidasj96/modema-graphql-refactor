import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SenderInformationService } from './sender-information.service';
import { CreateSenderInformationInput } from './dto/create-sender-information.input';
import { UpdateSenderInformationInput } from './dto/update-sender-information.input';
import { SenderInformation } from '@/modules/sender-information/domain/sender-information';

@Resolver(() => SenderInformation)
export class SenderInformationResolver {
  constructor(
    private readonly senderInformationService: SenderInformationService,
  ) {}

  @Mutation(() => SenderInformation)
  createSenderInformation(
    @Args('createSenderInformationInput')
    createSenderInformationInput: CreateSenderInformationInput,
  ) {
    return this.senderInformationService.create(createSenderInformationInput);
  }

  @Query(() => [SenderInformation], { name: 'senderInformation' })
  findAll() {
    return this.senderInformationService.findAll();
  }

  @Query(() => SenderInformation, { name: 'senderInformation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.senderInformationService.findOne(id);
  }

  @Mutation(() => SenderInformation)
  updateSenderInformation(
    @Args('updateSenderInformationInput')
    updateSenderInformationInput: UpdateSenderInformationInput,
  ) {
    return this.senderInformationService.update(
      updateSenderInformationInput.id,
      updateSenderInformationInput,
    );
  }

  @Mutation(() => SenderInformation)
  removeSenderInformation(@Args('id', { type: () => Int }) id: number) {
    return this.senderInformationService.remove(id);
  }
}
