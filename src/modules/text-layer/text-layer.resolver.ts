import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TextLayerService } from './text-layer.service';
import { CreateTextLayerInput } from './dto/create-text-layer.input';
import { TextLayer } from '@/modules/text-layer/domain/text-layer';

@Resolver(() => TextLayer)
export class TextLayerResolver {
  constructor(private readonly textLayerService: TextLayerService) {}

  @Mutation(() => TextLayer)
  createTextLayer(
    @Args('createTextLayerInput') createTextLayerInput: CreateTextLayerInput,
  ) {
    return this.textLayerService.create(createTextLayerInput);
  }

  @Query(() => [TextLayer], { name: 'textLayer' })
  findAll() {
    return this.textLayerService.findAll();
  }

  @Query(() => TextLayer, { name: 'textLayer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.textLayerService.findOne(id);
  }

  // @Mutation(() => TextLayer)
  // updateTextLayer(
  //   @Args('updateTextLayerInput') updateTextLayerInput: UpdateTextLayerInput,
  // ) {
  //   return this.textLayerService.update(
  //     updateTextLayerInput.id,
  //     updateTextLayerInput,
  //   );
  // }

  @Mutation(() => TextLayer)
  removeTextLayer(@Args('id', { type: () => Int }) id: number) {
    return this.textLayerService.remove(id);
  }
}
