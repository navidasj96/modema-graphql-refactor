import { Resolver } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from '@/modules/label/domain/label';

@Resolver(() => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}
}
