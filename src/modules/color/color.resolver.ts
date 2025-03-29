import { Resolver } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { Color } from './domain/color';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly colorService: ColorService) {}
}
