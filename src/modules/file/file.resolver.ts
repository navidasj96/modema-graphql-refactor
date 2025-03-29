import { Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { File } from './domain/file';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}
}
