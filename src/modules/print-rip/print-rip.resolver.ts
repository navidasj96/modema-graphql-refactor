import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrintRipService } from './print-rip.service';
import { CreatePrintRipInput } from './dto/create-print-rip.input';
import { UpdatePrintRipInput } from './dto/update-print-rip.input';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';

@Resolver(() => PrintRip)
export class PrintRipResolver {
  constructor(private readonly printRipService: PrintRipService) {}

  @Mutation(() => PrintRip)
  createPrintRip(
    @Args('createPrintRipInput') createPrintRipInput: CreatePrintRipInput,
  ) {
    return this.printRipService.create(createPrintRipInput);
  }

  @Query(() => [PrintRip], { name: 'printRip' })
  findAll() {
    return this.printRipService.findAll();
  }

  @Query(() => PrintRip, { name: 'printRip' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.printRipService.findOne(id);
  }

  @Mutation(() => PrintRip)
  updatePrintRip(
    @Args('updatePrintRipInput') updatePrintRipInput: UpdatePrintRipInput,
  ) {
    return this.printRipService.update(
      updatePrintRipInput.id,
      updatePrintRipInput,
    );
  }

  @Mutation(() => PrintRip)
  removePrintRip(@Args('id', { type: () => Int }) id: number) {
    return this.printRipService.remove(id);
  }
}
