import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileNegotiationService } from './file-negotiation.service';
import { CreateFileNegotiationInput } from './dto/create-file-negotiation.input';
import { UpdateFileNegotiationInput } from './dto/update-file-negotiation.input';
import { FileNegotiation } from './domain/file-negotiation';

@Resolver(() => FileNegotiation)
export class FileNegotiationResolver {
  constructor(
    private readonly fileNegotiationService: FileNegotiationService,
  ) {}

  @Mutation(() => FileNegotiation)
  createFileNegotiation(
    @Args('createFileNegotiationInput')
    createFileNegotiationInput: CreateFileNegotiationInput,
  ) {
    return this.fileNegotiationService.create(createFileNegotiationInput);
  }

  @Query(() => [FileNegotiation], { name: 'fileNegotiation' })
  findAll() {
    return this.fileNegotiationService.findAll();
  }

  @Query(() => FileNegotiation, { name: 'fileNegotiation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fileNegotiationService.findOne(id);
  }

  @Mutation(() => FileNegotiation)
  updateFileNegotiation(
    @Args('updateFileNegotiationInput')
    updateFileNegotiationInput: UpdateFileNegotiationInput,
  ) {
    return this.fileNegotiationService.update(
      updateFileNegotiationInput.id,
      updateFileNegotiationInput,
    );
  }

  @Mutation(() => FileNegotiation)
  removeFileNegotiation(@Args('id', { type: () => Int }) id: number) {
    return this.fileNegotiationService.remove(id);
  }
}
