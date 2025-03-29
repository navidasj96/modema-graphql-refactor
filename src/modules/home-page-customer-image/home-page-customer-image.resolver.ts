import { Resolver } from '@nestjs/graphql';
import { HomePageCustomerImageService } from './home-page-customer-image.service';
import { HomePageCustomerImage } from './domain/home-page-customer-image';

@Resolver(() => HomePageCustomerImage)
export class HomePageCustomerImageResolver {
  constructor(
    private readonly homePageCustomerImageService: HomePageCustomerImageService,
  ) {}
}
