import { Module } from '@nestjs/common';
import { ModemaAcceleratorVideoService } from './modema-accelerator-video.service';
import { ModemaAcceleratorVideoResolver } from './modema-accelerator-video.resolver';
import { ModemaAcceleratorVideo } from '@/modules/modema-accelerator-video/entities/modema-accelerator-video.entity';
import { ModemaAcceleratorVideo as ModemaAcceleratorVideoGraphQL } from '@/modules/modema-accelerator-video/domain/modema-accelerator-video';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateModemaAcceleratorVideoInput } from '@/modules/modema-accelerator-video/dto/create-modema-accelerator-video.input';

@Module({
  providers: [ModemaAcceleratorVideoResolver, ModemaAcceleratorVideoService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ModemaAcceleratorVideo])],
      resolvers: [
        {
          EntityClass: ModemaAcceleratorVideo,
          DTOClass: ModemaAcceleratorVideoGraphQL,
          CreateDTOClass: CreateModemaAcceleratorVideoInput,
        },
      ],
    }),
  ],
})
export class ModemaAcceleratorVideoModule {}
