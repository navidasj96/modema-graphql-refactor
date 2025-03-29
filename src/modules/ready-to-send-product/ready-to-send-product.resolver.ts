import { Resolver } from '@nestjs/graphql';
import { ReadyToSendProductService } from './ready-to-send-product.service';
import { ReadyToSendProduct } from '@/modules/ready-to-send-product/domain/ready-to-send-product';

@Resolver(() => ReadyToSendProduct)
export class ReadyToSendProductResolver {
  constructor(
    private readonly readyToSendProductService: ReadyToSendProductService,
  ) {}
}
