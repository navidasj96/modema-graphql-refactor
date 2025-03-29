import { Resolver } from '@nestjs/graphql';
import { ReturnRequestAddressService } from './return-request-address.service';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';

@Resolver(() => ReturnRequestAddress)
export class ReturnRequestAddressResolver {
  constructor(
    private readonly returnRequestAddressService: ReturnRequestAddressService,
  ) {}
}
