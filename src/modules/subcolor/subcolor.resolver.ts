import { Resolver } from '@nestjs/graphql';
import { SubcolorService } from './subcolor.service';
import { Subcolor } from '@/modules/subcolor/domain/subcolor';

@Resolver(() => Subcolor)
export class SubcolorResolver {
  constructor(private readonly subcolorService: SubcolorService) {}
}
