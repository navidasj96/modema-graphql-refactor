import { Resolver } from '@nestjs/graphql';
import { FileNegotiationService } from './file-negotiation.service';
import { FileNegotiation } from './domain/file-negotiation';

@Resolver(() => FileNegotiation)
export class FileNegotiationResolver {
  constructor(
    private readonly fileNegotiationService: FileNegotiationService
  ) {}
}
