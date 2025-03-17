import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SpecialOfferService } from './special-offer.service';
import { CreateSpecialOfferInput } from './dto/create-special-offer.input';
import { UpdateSpecialOfferInput } from './dto/update-special-offer.input';
import { SpecialOffer } from '@/modules/special-offer/domain/special-offer';

@Resolver(() => SpecialOffer)
export class SpecialOfferResolver {
  constructor(private readonly specialOfferService: SpecialOfferService) {}

  @Mutation(() => SpecialOffer)
  createSpecialOffer(
    @Args('createSpecialOfferInput')
    createSpecialOfferInput: CreateSpecialOfferInput,
  ) {
    return this.specialOfferService.create(createSpecialOfferInput);
  }

  @Query(() => [SpecialOffer], { name: 'specialOffer' })
  findAll() {
    return this.specialOfferService.findAll();
  }

  @Query(() => SpecialOffer, { name: 'specialOffer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.specialOfferService.findOne(id);
  }

  @Mutation(() => SpecialOffer)
  updateSpecialOffer(
    @Args('updateSpecialOfferInput')
    updateSpecialOfferInput: UpdateSpecialOfferInput,
  ) {
    return this.specialOfferService.update(
      updateSpecialOfferInput.id,
      updateSpecialOfferInput,
    );
  }

  @Mutation(() => SpecialOffer)
  removeSpecialOffer(@Args('id', { type: () => Int }) id: number) {
    return this.specialOfferService.remove(id);
  }
}
