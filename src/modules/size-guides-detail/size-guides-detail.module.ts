import { Module } from '@nestjs/common';
import { SizeGuidesDetailService } from './size-guides-detail.service';
import { SizeGuidesDetailResolver } from './size-guides-detail.resolver';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/entities/size-guides-detail.entity';
import { SizeGuidesDetail as SizeGuidesDetailGraphQL } from '@/modules/size-guides-detail/domain/size-guides-detail';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSizeGuidesDetailInput } from '@/modules/size-guides-detail/dto/create-size-guides-detail.input';

@Module({
  providers: [SizeGuidesDetailResolver, SizeGuidesDetailService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SizeGuidesDetail])],
      resolvers: [
        {
          EntityClass: SizeGuidesDetail,
          DTOClass: SizeGuidesDetailGraphQL,
          CreateDTOClass: CreateSizeGuidesDetailInput,
        },
      ],
    }),
  ],
})
export class SizeGuidesDetailModule {}
