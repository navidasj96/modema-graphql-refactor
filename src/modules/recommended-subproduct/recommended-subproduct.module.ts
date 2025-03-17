import { Module } from '@nestjs/common';
import { RecommendedSubproductService } from './recommended-subproduct.service';
import { RecommendedSubproductResolver } from './recommended-subproduct.resolver';
import { RecommendedSubproduct } from '@/modules/recommended-subproduct/entities/recommended-subproduct.entity';
import { RecommendedSubproduct as RecommendedSubproductGraphQL } from '@/modules/recommended-subproduct/domain/recommended-subproduct';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRecommendedSubproductInput } from '@/modules/recommended-subproduct/dto/create-recommended-subproduct.input';

@Module({
  providers: [RecommendedSubproductResolver, RecommendedSubproductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RecommendedSubproduct])],
      resolvers: [
        {
          EntityClass: RecommendedSubproduct,
          DTOClass: RecommendedSubproductGraphQL,
          CreateDTOClass: CreateRecommendedSubproductInput,
        },
      ],
    }),
  ],
})
export class RecommendedSubproductModule {}
