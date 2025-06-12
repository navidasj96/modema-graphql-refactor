import { Resolver } from '@nestjs/graphql';
import { SubproductSpecialImageService } from './subproduct-special-image.service';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/domain/subproduct-special-image';

@Resolver(() => SubproductSpecialImage)
export class SubproductSpecialImageResolver {
  constructor(
    private readonly subproductSpecialImageService: SubproductSpecialImageService
  ) {}
}
