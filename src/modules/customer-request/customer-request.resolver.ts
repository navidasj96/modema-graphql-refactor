import { Resolver } from '@nestjs/graphql';
import { CustomerRequestService } from './customer-request.service';
import { CustomerRequest } from './domain/customer-request';

@Resolver(() => CustomerRequest)
export class CustomerRequestResolver {
  constructor(
    private readonly customerRequestService: CustomerRequestService,
  ) {}
}
