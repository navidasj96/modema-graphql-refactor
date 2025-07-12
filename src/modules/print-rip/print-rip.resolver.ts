import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrintRipService } from './print-rip.service';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { UpdatePrintRipInput } from '@/modules/print-rip/dto/update-print-rip.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreatePrintRipInput } from '@/modules/print-rip/dto/create-print-rip.input';

@Resolver(() => PrintRip)
export class PrintRipResolver {
  constructor(private readonly printRipService: PrintRipService) {}

  @Mutation(() => GeneralResponseDto)
  async updatePrintRip(
    @Args('updatePrintRip', { type: () => UpdatePrintRipInput })
    updatePrintRip: UpdatePrintRipInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.printRipService.update(context, updatePrintRip);
  }

  @Mutation(() => GeneralResponseDto)
  async createPrintRip(
    @Args('createPrintRip', { type: () => CreatePrintRipInput })
    createPrintRip: CreatePrintRipInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.printRipService.create(context, createPrintRip);
  }

  @Query(() => [PrintRip])
  async ripToPrintPrintRipsList(
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.printRipService.ripToPrintPrintRipsList(context);
  }
}
