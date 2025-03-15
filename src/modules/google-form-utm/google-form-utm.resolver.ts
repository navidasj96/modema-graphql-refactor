import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GoogleFormUtmService } from './google-form-utm.service';
import { CreateGoogleFormUtmInput } from './dto/create-google-form-utm.input';
import { UpdateGoogleFormUtmInput } from './dto/update-google-form-utm.input';
import { GoogleFormUtm } from './domain/google-form-utm';

@Resolver(() => GoogleFormUtm)
export class GoogleFormUtmResolver {
  constructor(private readonly googleFormUtmService: GoogleFormUtmService) {}

  @Mutation(() => GoogleFormUtm)
  createGoogleFormUtm(
    @Args('createGoogleFormUtmInput')
    createGoogleFormUtmInput: CreateGoogleFormUtmInput,
  ) {
    return this.googleFormUtmService.create(createGoogleFormUtmInput);
  }

  @Query(() => [GoogleFormUtm], { name: 'googleFormUtm' })
  findAll() {
    return this.googleFormUtmService.findAll();
  }

  @Query(() => GoogleFormUtm, { name: 'googleFormUtm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.googleFormUtmService.findOne(id);
  }

  @Mutation(() => GoogleFormUtm)
  updateGoogleFormUtm(
    @Args('updateGoogleFormUtmInput')
    updateGoogleFormUtmInput: UpdateGoogleFormUtmInput,
  ) {
    return this.googleFormUtmService.update(
      updateGoogleFormUtmInput.id,
      updateGoogleFormUtmInput,
    );
  }

  @Mutation(() => GoogleFormUtm)
  removeGoogleFormUtm(@Args('id', { type: () => Int }) id: number) {
    return this.googleFormUtmService.remove(id);
  }
}
