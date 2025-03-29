import { Resolver } from '@nestjs/graphql';
import { BasicCarpetDesignerService } from './basic-carpet-designer.service';
import { BasicCarpetDesigner } from './domain/basic-carpet-designer';

@Resolver(() => BasicCarpetDesigner)
export class BasicCarpetDesignerResolver {
  constructor(
    private readonly basicCarpetDesignerService: BasicCarpetDesignerService,
  ) {}
}
