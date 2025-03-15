import { Module } from '@nestjs/common';
import { PriceGroupSizeService } from './price-group-size.service';
import { PriceGroupSizeResolver } from './price-group-size.resolver';
import { PriceGroupSize } from '@/modules/price-group-size/entities/price-group-size.entity';
import { PriceGroupSize as PriceGroupSizeGraphQL } from '@/modules/price-group-size/domain/price-group-size';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePriceGroupSizeInput } from '@/modules/price-group-size/dto/create-price-group-size.input';

@Module({
  providers: [PriceGroupSizeResolver, PriceGroupSizeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PriceGroupSize])],
      resolvers: [
        {
          EntityClass: PriceGroupSize,
          DTOClass: PriceGroupSizeGraphQL,
          CreateDTOClass: CreatePriceGroupSizeInput,
        },
      ],
    }),
  ],
})
export class PriceGroupSizeModule {}
