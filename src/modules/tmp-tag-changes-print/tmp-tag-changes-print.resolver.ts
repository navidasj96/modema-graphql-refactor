import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TmpTagChangesPrintService } from './tmp-tag-changes-print.service';
import { CreateTmpTagChangesPrintInput } from './dto/create-tmp-tag-changes-print.input';
import { UpdateTmpTagChangesPrintInput } from './dto/update-tmp-tag-changes-print.input';
import { TmpTagChangesPrint } from '@/modules/tmp-tag-changes-print/domain/tmp-tag-changes-print';

@Resolver(() => TmpTagChangesPrint)
export class TmpTagChangesPrintResolver {
  constructor(
    private readonly tmpTagChangesPrintService: TmpTagChangesPrintService,
  ) {}

  @Mutation(() => TmpTagChangesPrint)
  createTmpTagChangesPrint(
    @Args('createTmpTagChangesPrintInput')
    createTmpTagChangesPrintInput: CreateTmpTagChangesPrintInput,
  ) {
    return this.tmpTagChangesPrintService.create(createTmpTagChangesPrintInput);
  }

  @Query(() => [TmpTagChangesPrint], { name: 'tmpTagChangesPrint' })
  findAll() {
    return this.tmpTagChangesPrintService.findAll();
  }

  @Query(() => TmpTagChangesPrint, { name: 'tmpTagChangesPrint' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tmpTagChangesPrintService.findOne(id);
  }

  @Mutation(() => TmpTagChangesPrint)
  updateTmpTagChangesPrint(
    @Args('updateTmpTagChangesPrintInput')
    updateTmpTagChangesPrintInput: UpdateTmpTagChangesPrintInput,
  ) {
    return this.tmpTagChangesPrintService.update(
      updateTmpTagChangesPrintInput.id,
      updateTmpTagChangesPrintInput,
    );
  }

  @Mutation(() => TmpTagChangesPrint)
  removeTmpTagChangesPrint(@Args('id', { type: () => Int }) id: number) {
    return this.tmpTagChangesPrintService.remove(id);
  }
}
