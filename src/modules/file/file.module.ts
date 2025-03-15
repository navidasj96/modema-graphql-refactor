import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { File } from './entities/file.entity';
import { File as FileGraphQL } from './domain/file';
import { CreateFileInput } from './dto/create-file.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([File])],
      resolvers: [
        {
          EntityClass: File,
          DTOClass: FileGraphQL,
          CreateDTOClass: CreateFileInput,
        },
      ],
    }),
  ],
})
export class FileModule {}
