import { Resolver } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from '@/modules/tag/domain/tag';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}
}
