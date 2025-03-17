import { Module } from '@nestjs/common';
import { WebsiteVisitService } from './website-visit.service';
import { WebsiteVisitResolver } from './website-visit.resolver';
import { WebsiteVisit } from '@/modules/website-visit/entities/website-visit.entity';
import { WebsiteVisit as WebsiteVisitGraphQL } from '@/modules/website-visit/domain/website-visit';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWebsiteVisitInput } from '@/modules/website-visit/dto/create-website-visit.input';

@Module({
  providers: [WebsiteVisitResolver, WebsiteVisitService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WebsiteVisit])],
      resolvers: [
        {
          EntityClass: WebsiteVisit,
          DTOClass: WebsiteVisitGraphQL,
          CreateDTOClass: CreateWebsiteVisitInput,
        },
      ],
    }),
  ],
})
export class WebsiteVisitModule {}
