import { Resolver } from '@nestjs/graphql';
import { PreorderService } from './preorder.service';
import { Preorder } from '@/modules/preorder/domain/preorder';

@Resolver(() => Preorder)
export class PreorderResolver {
  constructor(private readonly preorderService: PreorderService) {}
}
