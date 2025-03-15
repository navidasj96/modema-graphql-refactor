import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrintProfileService } from './print-profile.service';
import { CreatePrintProfileInput } from './dto/create-print-profile.input';
import { UpdatePrintProfileInput } from './dto/update-print-profile.input';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';

@Resolver(() => PrintProfile)
export class PrintProfileResolver {
  constructor(private readonly printProfileService: PrintProfileService) {}

  @Mutation(() => PrintProfile)
  createPrintProfile(
    @Args('createPrintProfileInput')
    createPrintProfileInput: CreatePrintProfileInput,
  ) {
    return this.printProfileService.create(createPrintProfileInput);
  }

  @Query(() => [PrintProfile], { name: 'printProfile' })
  findAll() {
    return this.printProfileService.findAll();
  }

  @Query(() => PrintProfile, { name: 'printProfile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.printProfileService.findOne(id);
  }

  @Mutation(() => PrintProfile)
  updatePrintProfile(
    @Args('updatePrintProfileInput')
    updatePrintProfileInput: UpdatePrintProfileInput,
  ) {
    return this.printProfileService.update(
      updatePrintProfileInput.id,
      updatePrintProfileInput,
    );
  }

  @Mutation(() => PrintProfile)
  removePrintProfile(@Args('id', { type: () => Int }) id: number) {
    return this.printProfileService.remove(id);
  }
}
