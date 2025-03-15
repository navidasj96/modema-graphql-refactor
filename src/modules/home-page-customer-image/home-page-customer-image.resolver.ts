import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HomePageCustomerImageService } from './home-page-customer-image.service';
import { CreateHomePageCustomerImageInput } from './dto/create-home-page-customer-image.input';
import { UpdateHomePageCustomerImageInput } from './dto/update-home-page-customer-image.input';
import { HomePageCustomerImage } from './domain/home-page-customer-image';

@Resolver(() => HomePageCustomerImage)
export class HomePageCustomerImageResolver {
  constructor(
    private readonly homePageCustomerImageService: HomePageCustomerImageService,
  ) {}

  @Mutation(() => HomePageCustomerImage)
  createHomePageCustomerImage(
    @Args('createHomePageCustomerImageInput')
    createHomePageCustomerImageInput: CreateHomePageCustomerImageInput,
  ) {
    return this.homePageCustomerImageService.create(
      createHomePageCustomerImageInput,
    );
  }

  @Query(() => [HomePageCustomerImage], { name: 'homePageCustomerImage' })
  findAll() {
    return this.homePageCustomerImageService.findAll();
  }

  @Query(() => HomePageCustomerImage, { name: 'homePageCustomerImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.homePageCustomerImageService.findOne(id);
  }

  @Mutation(() => HomePageCustomerImage)
  updateHomePageCustomerImage(
    @Args('updateHomePageCustomerImageInput')
    updateHomePageCustomerImageInput: UpdateHomePageCustomerImageInput,
  ) {
    return this.homePageCustomerImageService.update(
      updateHomePageCustomerImageInput.id,
      updateHomePageCustomerImageInput,
    );
  }

  @Mutation(() => HomePageCustomerImage)
  removeHomePageCustomerImage(@Args('id', { type: () => Int }) id: number) {
    return this.homePageCustomerImageService.remove(id);
  }
}
