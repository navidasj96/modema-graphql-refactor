import { Resolver } from '@nestjs/graphql';
import { PreorderRegisterService } from './preorder-register.service';
import { PreorderRegister } from '@/modules/preorder-register/domain/preorder-register';

@Resolver(() => PreorderRegister)
export class PreorderRegisterResolver {
  constructor(
    private readonly preorderRegisterService: PreorderRegisterService,
  ) {}
}
