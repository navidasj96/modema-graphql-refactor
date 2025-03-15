import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Image } from './entities/image.entity';
import { Image as ImageGraphQL } from './domain/image';
import { CreateImageInput } from './dto/create-image.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Image])],
      resolvers: [
        {
          EntityClass: Image,
          DTOClass: ImageGraphQL,
          CreateDTOClass: CreateImageInput,
        },
      ],
    }),
  ],
})
export class ImageModule {}
