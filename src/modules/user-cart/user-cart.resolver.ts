import { Resolver } from '@nestjs/graphql';
import { UserCartService } from './user-cart.service';
import { UserCart } from '@/modules/user-cart/domain/user-cart';

@Resolver(() => UserCart)
export class UserCartResolver {
  constructor(private readonly userCartService: UserCartService) {}
}
