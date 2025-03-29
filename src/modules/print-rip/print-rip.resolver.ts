import { Resolver } from '@nestjs/graphql';
import { PrintRipService } from './print-rip.service';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';

@Resolver(() => PrintRip)
export class PrintRipResolver {
  constructor(private readonly printRipService: PrintRipService) {}
}
