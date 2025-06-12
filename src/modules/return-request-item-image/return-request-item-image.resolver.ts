import { Resolver } from '@nestjs/graphql';
import { ReturnRequestItemImageService } from './return-request-item-image.service';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/domain/return-request-item-image';

@Resolver(() => ReturnRequestItemImage)
export class ReturnRequestItemImageResolver {
  constructor(
    private readonly returnRequestItemImageService: ReturnRequestItemImageService
  ) {}
}
