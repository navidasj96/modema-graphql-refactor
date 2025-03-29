import { Resolver } from '@nestjs/graphql';
import { RipTemplateItemService } from './rip-template-item.service';
import { RipTemplateItem } from '@/modules/rip-template-item/domain/rip-template-item';

@Resolver(() => RipTemplateItem)
export class RipTemplateItemResolver {
  constructor(
    private readonly ripTemplateItemService: RipTemplateItemService,
  ) {}
}
