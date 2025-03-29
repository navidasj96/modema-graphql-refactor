import { Resolver } from '@nestjs/graphql';
import { VisitorService } from './visitor.service';
import { Visitor } from '@/modules/visitor/domain/visitor';

@Resolver(() => Visitor)
export class VisitorResolver {
  constructor(private readonly visitorService: VisitorService) {}
}
