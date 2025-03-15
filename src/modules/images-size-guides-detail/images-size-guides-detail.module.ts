import { Module } from '@nestjs/common';
import { ImagesSizeGuidesDetailService } from './images-size-guides-detail.service';
import { ImagesSizeGuidesDetailResolver } from './images-size-guides-detail.resolver';
import { ImagesSizeGuidesDetail } from '@/modules/images-size-guides-detail/entities/images-size-guides-detail.entity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImagesSizeGuidesDetail as ImagesSizeGuidesDetailGraphQL } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail';
import { CreateImagesSizeGuidesDetailInput } from '@/modules/images-size-guides-detail/dto/create-images-size-guides-detail.input';

@Module({
  providers: [ImagesSizeGuidesDetailResolver, ImagesSizeGuidesDetailService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImagesSizeGuidesDetail])],
      resolvers: [
        {
          EntityClass: ImagesSizeGuidesDetail,
          DTOClass: ImagesSizeGuidesDetailGraphQL,
          CreateDTOClass: CreateImagesSizeGuidesDetailInput,
        },
      ],
    }),
  ],
})
export class ImagesSizeGuidesDetailModule {}
