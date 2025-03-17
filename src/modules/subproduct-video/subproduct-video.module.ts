import { Module } from '@nestjs/common';
import { SubproductVideoService } from './subproduct-video.service';
import { SubproductVideoResolver } from './subproduct-video.resolver';
import { SubproductVideo } from '@/modules/subproduct-video/entities/subproduct-video.entity';
import { SubproductVideo as SubproductVideoGraphQL } from '@/modules/subproduct-video/domain/subproduct-video';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSubproductVideoInput } from '@/modules/subproduct-video/dto/create-subproduct-video.input';

@Module({
  providers: [SubproductVideoResolver, SubproductVideoService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SubproductVideo])],
      resolvers: [
        {
          EntityClass: SubproductVideo,
          DTOClass: SubproductVideoGraphQL,
          CreateDTOClass: CreateSubproductVideoInput,
        },
      ],
    }),
  ],
})
export class SubproductVideoModule {}
