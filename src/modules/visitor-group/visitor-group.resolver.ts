import { Resolver } from '@nestjs/graphql';
import { VisitorGroupService } from './visitor-group.service';
import { VisitorGroup } from '@/modules/visitor-group/domain/visitor-group';

@Resolver(() => VisitorGroup)
export class VisitorGroupResolver {
  constructor(private readonly visitorGroupService: VisitorGroupService) {}
}
