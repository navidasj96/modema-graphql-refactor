import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExportProductService } from './export-product.service';
import { CreateExportProductInput } from './dto/create-export-product.input';
import { ExportProduct } from './domain/export-product';

@Resolver(() => ExportProduct)
export class ExportProductResolver {
  constructor(private readonly exportProductService: ExportProductService) {}

  @Mutation(() => ExportProduct)
  createExportProduct(
    @Args('createExportProductInput')
    createExportProductInput: CreateExportProductInput,
  ) {
    return this.exportProductService.create(createExportProductInput);
  }

  @Query(() => [ExportProduct], { name: 'exportProduct' })
  findAll() {
    return this.exportProductService.findAll();
  }

  @Query(() => ExportProduct, { name: 'exportProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.exportProductService.findOne(id);
  }

  // @Mutation(() => ExportProduct)
  // updateExportProduct(@Args('updateExportProductInput') updateExportProductInput: UpdateExportProductInput) {
  //   return this.exportProductService.update(updateExportProductInput.id, updateExportProductInput);
  // }

  @Mutation(() => ExportProduct)
  removeExportProduct(@Args('id', { type: () => Int }) id: number) {
    return this.exportProductService.remove(id);
  }
}
