import { Resolver } from '@nestjs/graphql';
import { ReturnRequestService } from './return-request.service';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';

@Resolver(() => ReturnRequest)
export class ReturnRequestResolver {
  constructor(private readonly returnRequestService: ReturnRequestService) {}
}
