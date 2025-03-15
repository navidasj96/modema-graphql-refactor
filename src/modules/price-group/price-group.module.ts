import { Module } from '@nestjs/common';
import { PriceGroupService } from './price-group.service';
import { PriceGroupResolver } from './price-group.resolver';
import { PriceGroup } from '@/modules/price-group/entities/price-group.entity';
import { PriceGroup as PriceGroupGraphQL } from '@/modules/price-group/domain/price-group';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePriceGroupInput } from '@/modules/price-group/dto/create-price-group.input';

@Module({
  providers: [PriceGroupResolver, PriceGroupService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PriceGroup])],
      resolvers: [
        {
          EntityClass: PriceGroup,
          DTOClass: PriceGroupGraphQL,
          CreateDTOClass: CreatePriceGroupInput,
        },
      ],
    }),
  ],
})
export class PriceGroupModule {}
