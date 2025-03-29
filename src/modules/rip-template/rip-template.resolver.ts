import { Resolver } from '@nestjs/graphql';
import { RipTemplateService } from './rip-template.service';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';

@Resolver(() => RipTemplate)
export class RipTemplateResolver {
  constructor(private readonly ripTemplateService: RipTemplateService) {}
}
