import { Resolver } from '@nestjs/graphql';
import { TmpTagChangesPrintService } from './tmp-tag-changes-print.service';
import { TmpTagChangesPrint } from '@/modules/tmp-tag-changes-print/domain/tmp-tag-changes-print';

@Resolver(() => TmpTagChangesPrint)
export class TmpTagChangesPrintResolver {
  constructor(
    private readonly tmpTagChangesPrintService: TmpTagChangesPrintService
  ) {}
}
