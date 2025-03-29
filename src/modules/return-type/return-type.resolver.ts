import { Resolver } from '@nestjs/graphql';
import { ReturnTypeService } from './return-type.service';
import { ReturnType } from '@/modules/return-type/domain/return-type';

@Resolver(() => ReturnType)
export class ReturnTypeResolver {
  constructor(private readonly returnTypeService: ReturnTypeService) {}
}
