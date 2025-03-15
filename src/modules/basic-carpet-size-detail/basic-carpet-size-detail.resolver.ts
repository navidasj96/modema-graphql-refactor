import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BasicCarpetSizeDetailService } from './basic-carpet-size-detail.service';
import { CreateBasicCarpetSizeDetailInput } from './dto/create-basic-carpet-size-detail.input';
import { UpdateBasicCarpetSizeDetailInput } from './dto/update-basic-carpet-size-detail.input';
import { BasicCarpetSizeDetail } from './domain/basic-carpet-size-detail';

@Resolver(() => BasicCarpetSizeDetail)
export class BasicCarpetSizeDetailResolver {
  constructor(
    private readonly basicCarpetSizeDetailService: BasicCarpetSizeDetailService,
  ) {}

  @Mutation(() => BasicCarpetSizeDetail)
  createBasicCarpetSizeDetail(
    @Args('createBasicCarpetSizeDetailInput')
    createBasicCarpetSizeDetailInput: CreateBasicCarpetSizeDetailInput,
  ) {
    return this.basicCarpetSizeDetailService.create(
      createBasicCarpetSizeDetailInput,
    );
  }

  @Query(() => [BasicCarpetSizeDetail], { name: 'basicCarpetSizeDetail' })
  findAll() {
    return this.basicCarpetSizeDetailService.findAll();
  }

  @Query(() => BasicCarpetSizeDetail, { name: 'basicCarpetSizeDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetSizeDetailService.findOne(id);
  }

  @Mutation(() => BasicCarpetSizeDetail)
  updateBasicCarpetSizeDetail(
    @Args('updateBasicCarpetSizeDetailInput')
    updateBasicCarpetSizeDetailInput: UpdateBasicCarpetSizeDetailInput,
  ) {
    return this.basicCarpetSizeDetailService.update(
      updateBasicCarpetSizeDetailInput.id,
      updateBasicCarpetSizeDetailInput,
    );
  }

  @Mutation(() => BasicCarpetSizeDetail)
  removeBasicCarpetSizeDetail(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetSizeDetailService.remove(id);
  }
}
