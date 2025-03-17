import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateResolver } from './rate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rate } from '@/modules/rate/entities/rate.entity';
import { Rate as RateGraphQL } from '@/modules/rate/domain/rate';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRateInput } from '@/modules/rate/dto/create-rate.input';

@Module({
  providers: [RateResolver, RateService],
  imports: [
    TypeOrmModule.forFeature([Rate]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Rate])],
      resolvers: [
        {
          EntityClass: Rate,
          DTOClass: RateGraphQL,
          CreateDTOClass: CreateRateInput,
        },
      ],
    }),
  ],
})
export class RateModule {}
