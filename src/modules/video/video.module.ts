import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoResolver } from './video.resolver';
import { Video } from '@/modules/video/entities/video.entity';
import { Video as VideoGraphQL } from '@/modules/video/domain/video';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVideoInput } from '@/modules/video/dto/create-video.input';

@Module({
  providers: [VideoResolver, VideoService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Video])],
      resolvers: [
        {
          EntityClass: Video,
          DTOClass: VideoGraphQL,
          CreateDTOClass: CreateVideoInput,
        },
      ],
    }),
  ],
})
export class VideoModule {}
