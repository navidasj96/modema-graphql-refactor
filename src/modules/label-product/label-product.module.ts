import { Module } from '@nestjs/common';
import { LabelProductService } from './label-product.service';
import { LabelProductResolver } from './label-product.resolver';
import { LabelProduct } from '@/modules/label-product/entities/label-product.entity';
import { LabelProduct as LabelProductGraphQL } from '@/modules/label-product/domain/label-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateLabelProductInput } from '@/modules/label-product/dto/create-label-product.input';

@Module({
  providers: [LabelProductResolver, LabelProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([LabelProduct])],
      resolvers: [
        {
          EntityClass: LabelProduct,
          DTOClass: LabelProductGraphQL,
          CreateDTOClass: CreateLabelProductInput,
        },
      ],
    }),
  ],
})
export class LabelProductModule {}
