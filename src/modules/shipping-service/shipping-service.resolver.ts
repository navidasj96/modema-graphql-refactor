import { Resolver } from '@nestjs/graphql';
import { ShippingServiceService } from './shipping-service.service';
import { ShippingService } from '@/modules/shipping-service/domain/shipping-service';

@Resolver(() => ShippingService)
export class ShippingServiceResolver {
  constructor(
    private readonly shippingServiceService: ShippingServiceService,
  ) {}
}
