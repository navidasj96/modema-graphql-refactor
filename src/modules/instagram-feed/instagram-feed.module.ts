import { Module } from '@nestjs/common';
import { InstagramFeedService } from './instagram-feed.service';
import { InstagramFeedResolver } from './instagram-feed.resolver';
import { InstagramFeed } from '@/modules/instagram-feed/entities/instagram-feed.entity';
import { InstagramFeed as InstagramFeedGraphQL } from '@/modules/instagram-feed/domain/instagram-feed';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInstagramFeedInput } from '@/modules/instagram-feed/dto/create-instagram-feed.input';

@Module({
  providers: [InstagramFeedResolver, InstagramFeedService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InstagramFeed])],
      resolvers: [
        {
          EntityClass: InstagramFeed,
          DTOClass: InstagramFeedGraphQL,
          CreateDTOClass: CreateInstagramFeedInput,
        },
      ],
    }),
  ],
})
export class InstagramFeedModule {}
