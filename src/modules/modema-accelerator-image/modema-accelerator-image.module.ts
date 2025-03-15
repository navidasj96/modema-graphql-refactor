import { Module } from '@nestjs/common';
import { ModemaAcceleratorImageService } from './modema-accelerator-image.service';
import { ModemaAcceleratorImageResolver } from './modema-accelerator-image.resolver';
import { ModemaAcceleratorImage } from '@/modules/modema-accelerator-image/entities/modema-accelerator-image.entity';
import { ModemaAcceleratorImage as ModemaAcceleratorImageGraphQL } from '@/modules/modema-accelerator-image/domain/modema-accelerator-image';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateModemaAcceleratorImageInput } from '@/modules/modema-accelerator-image/dto/create-modema-accelerator-image.input';

@Module({
  providers: [ModemaAcceleratorImageResolver, ModemaAcceleratorImageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ModemaAcceleratorImage])],
      resolvers: [
        {
          EntityClass: ModemaAcceleratorImage,
          DTOClass: ModemaAcceleratorImageGraphQL,
          CreateDTOClass: CreateModemaAcceleratorImageInput,
        },
      ],
    }),
  ],
})
export class ModemaAcceleratorImageModule {}
