import { Resolver } from '@nestjs/graphql';
import { ModemaAcceleratorService } from './modema-accelerator.service';
import { ModemaAccelerator } from '@/modules/modema-accelerator/domain/modema-accelerator';

@Resolver(() => ModemaAccelerator)
export class ModemaAcceleratorResolver {
  constructor(
    private readonly modemaAcceleratorService: ModemaAcceleratorService
  ) {}
}
