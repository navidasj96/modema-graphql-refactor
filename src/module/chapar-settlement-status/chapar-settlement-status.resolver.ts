import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChaparSettlementStatusService } from './chapar-settlement-status.service';
import { CreateChaparSettlementStatusInput } from './dto/create-chapar-settlement-status.input';
import { UpdateChaparSettlementStatusInput } from './dto/update-chapar-settlement-status.input';
import { ChaparSettlementStatus } from './domain/chapar-settlement-status';

@Resolver(() => ChaparSettlementStatus)
export class ChaparSettlementStatusResolver {
  constructor(
    private readonly chaparSettlementStatusService: ChaparSettlementStatusService,
  ) {}

  @Mutation(() => ChaparSettlementStatus)
  createChaparSettlementStatus(
    @Args('createChaparSettlementStatusInput')
    createChaparSettlementStatusInput: CreateChaparSettlementStatusInput,
  ) {
    return this.chaparSettlementStatusService.create(
      createChaparSettlementStatusInput,
    );
  }

  @Query(() => [ChaparSettlementStatus], { name: 'chaparSettlementStatus' })
  findAll() {
    return this.chaparSettlementStatusService.findAll();
  }

  @Query(() => ChaparSettlementStatus, { name: 'chaparSettlementStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chaparSettlementStatusService.findOne(id);
  }

  @Mutation(() => ChaparSettlementStatus)
  updateChaparSettlementStatus(
    @Args('updateChaparSettlementStatusInput')
    updateChaparSettlementStatusInput: UpdateChaparSettlementStatusInput,
  ) {
    return this.chaparSettlementStatusService.update(
      updateChaparSettlementStatusInput.id,
      updateChaparSettlementStatusInput,
    );
  }

  @Mutation(() => ChaparSettlementStatus)
  removeChaparSettlementStatus(@Args('id', { type: () => Int }) id: number) {
    return this.chaparSettlementStatusService.remove(id);
  }
}
