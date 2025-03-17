import { Module } from '@nestjs/common';
import { SizeGuideService } from './size-guide.service';
import { SizeGuideResolver } from './size-guide.resolver';
import { SizeGuide } from '@/modules/size-guide/entities/size-guide.entity';
import { SizeGuide as SizeGuideGraphQL } from '@/modules/size-guide/domain/size-guide';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSizeGuideInput } from '@/modules/size-guide/dto/create-size-guide.input';

@Module({
  providers: [SizeGuideResolver, SizeGuideService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SizeGuide])],
      resolvers: [
        {
          EntityClass: SizeGuide,
          DTOClass: SizeGuideGraphQL,
          CreateDTOClass: CreateSizeGuideInput,
        },
      ],
    }),
  ],
})
export class SizeGuideModule {}
