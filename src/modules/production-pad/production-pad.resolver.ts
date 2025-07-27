import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { ProductionPadService } from './production-pad.service';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { UseGuards } from '@nestjs/common';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { PrintCarpetPadLabelsInput } from '@/modules/production-pad/dto/print-carpet-pad-labels.input';
import { PrintCarpetPadLabelsOutput } from '@/modules/production-pad/dto/print-carpet-pad-labels.output';
import { CreateCarpetPadOutput } from '@/modules/production-pad/dto/create-carpet-pad-output';

@Resolver(() => ProductionPad)
export class ProductionPadResolver {
  constructor(private readonly productionPadService: ProductionPadService) {}

  @UseGuards(PermissionsGuard)
  @Permissions(['print carpet pad tags'])
  @Mutation(() => CreateCarpetPadOutput)
  async createCarpetPads(
    @Args('createCarpetPadsInput', { type: () => CreateCarpetPadInput })
    createCarpetPadInput: CreateCarpetPadInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.productionPadService.createCarpetPads(
      createCarpetPadInput,
      context
    );
  }

  @Mutation(() => PrintCarpetPadLabelsOutput)
  async printCarpetPadLabels(
    @Args('printCarpetPadLabelsInput', {
      type: () => PrintCarpetPadLabelsInput,
    })
    printCarpetPadLabelsInput: PrintCarpetPadLabelsInput
  ) {
    return await this.productionPadService.printCarpetPadLabels(
      printCarpetPadLabelsInput
    );
  }
}
