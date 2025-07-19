import { Resolver } from '@nestjs/graphql';
import { PrintMachineService } from './print-machine.service';
import { PrintMachine } from '@/modules/print-machine/domain/print-machine';

@Resolver(() => PrintMachine)
export class PrintMachineResolver {
  constructor(private readonly printMachineService: PrintMachineService) {}
}
