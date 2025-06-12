import { Resolver } from '@nestjs/graphql';
import { CustomerRequestFileService } from './customer-request-file.service';
import { CustomerRequestFile } from './domain/customer-request-file';

@Resolver(() => CustomerRequestFile)
export class CustomerRequestFileResolver {
  constructor(
    private readonly customerRequestFileService: CustomerRequestFileService
  ) {}
}
