import { Resolver } from '@nestjs/graphql';
import { NewBorderService } from './new-border.service';
import { NewBorder } from '@/modules/new-border/domain/new-border';

@Resolver(() => NewBorder)
export class NewBorderResolver {
  constructor(private readonly newBorderService: NewBorderService) {}
}
