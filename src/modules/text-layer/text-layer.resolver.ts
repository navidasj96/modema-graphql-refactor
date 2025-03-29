import { Resolver } from '@nestjs/graphql';
import { TextLayerService } from './text-layer.service';
import { TextLayer } from '@/modules/text-layer/domain/text-layer';

@Resolver(() => TextLayer)
export class TextLayerResolver {
  constructor(private readonly textLayerService: TextLayerService) {}
}
