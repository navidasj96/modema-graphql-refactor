import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConfigService } from './config.service';
import { CreateConfigInput } from './dto/create-config.input';
import { UpdateConfigInput } from './dto/update-config.input';
import { Config } from './domain/config';

@Resolver(() => Config)
export class ConfigResolver {
  constructor(private readonly configService: ConfigService) {}

  @Mutation(() => Config)
  createConfig(
    @Args('createConfigInput') createConfigInput: CreateConfigInput,
  ) {
    return this.configService.create(createConfigInput);
  }

  @Query(() => [Config], { name: 'config' })
  findAll() {
    return this.configService.findAll();
  }

  @Query(() => Config, { name: 'config' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.configService.findOne(id);
  }

  @Mutation(() => Config)
  updateConfig(
    @Args('updateConfigInput') updateConfigInput: UpdateConfigInput,
  ) {
    return this.configService.update(updateConfigInput.id, updateConfigInput);
  }

  @Mutation(() => Config)
  removeConfig(@Args('id', { type: () => Int }) id: number) {
    return this.configService.remove(id);
  }
}
