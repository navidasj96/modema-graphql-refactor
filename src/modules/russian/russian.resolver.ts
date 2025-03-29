import { Resolver } from '@nestjs/graphql';
import { RussianService } from './russian.service';
import { Russian } from '@/modules/russian/domain/russian';

@Resolver(() => Russian)
export class RussianResolver {
  constructor(private readonly russianService: RussianService) {}
}
