import { Resolver } from '@nestjs/graphql';
import { TmpSpanishNameService } from './tmp-spanish-name.service';
import { TmpSpanishName } from '@/modules/tmp-spanish-name/domain/tmp-spanish-name';

@Resolver(() => TmpSpanishName)
export class TmpSpanishNameResolver {
  constructor(private readonly tmpSpanishNameService: TmpSpanishNameService) {}
}
