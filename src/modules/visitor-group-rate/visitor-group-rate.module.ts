import { Module } from '@nestjs/common';
import { VisitorGroupRateService } from './visitor-group-rate.service';
import { VisitorGroupRateResolver } from './visitor-group-rate.resolver';
import { VisitorGroupRate } from '@/modules/visitor-group-rate/entities/visitor-group-rate.entity';
import { VisitorGroupRate as VisitorGroupRateGraphQL } from '@/modules/visitor-group-rate/domain/visitor-group-rate';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVisitorGroupRateInput } from '@/modules/visitor-group-rate/dto/create-visitor-group-rate.input';

@Module({
  providers: [VisitorGroupRateResolver, VisitorGroupRateService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([VisitorGroupRate])],
      resolvers: [
        {
          EntityClass: VisitorGroupRate,
          DTOClass: VisitorGroupRateGraphQL,
          CreateDTOClass: CreateVisitorGroupRateInput,
        },
      ],
    }),
  ],
})
export class VisitorGroupRateModule {}
