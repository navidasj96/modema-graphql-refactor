import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WonderfulOfferService } from './wonderful-offer.service';
import { CreateWonderfulOfferInput } from './dto/create-wonderful-offer.input';
import { UpdateWonderfulOfferInput } from './dto/update-wonderful-offer.input';
import { WonderfulOffer } from '@/modules/wonderful-offer/domain/wonderful-offer';

@Resolver(() => WonderfulOffer)
export class WonderfulOfferResolver {
  constructor(private readonly wonderfulOfferService: WonderfulOfferService) {}

  @Mutation(() => WonderfulOffer)
  createWonderfulOffer(
    @Args('createWonderfulOfferInput')
    createWonderfulOfferInput: CreateWonderfulOfferInput,
  ) {
    return this.wonderfulOfferService.create(createWonderfulOfferInput);
  }

  @Query(() => [WonderfulOffer], { name: 'wonderfulOffer' })
  findAll() {
    return this.wonderfulOfferService.findAll();
  }

  @Query(() => WonderfulOffer, { name: 'wonderfulOffer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wonderfulOfferService.findOne(id);
  }

  @Mutation(() => WonderfulOffer)
  updateWonderfulOffer(
    @Args('updateWonderfulOfferInput')
    updateWonderfulOfferInput: UpdateWonderfulOfferInput,
  ) {
    return this.wonderfulOfferService.update(
      updateWonderfulOfferInput.id,
      updateWonderfulOfferInput,
    );
  }

  @Mutation(() => WonderfulOffer)
  removeWonderfulOffer(@Args('id', { type: () => Int }) id: number) {
    return this.wonderfulOfferService.remove(id);
  }
}
