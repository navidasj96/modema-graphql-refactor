import { Module } from '@nestjs/common';
import { HyperService } from './hyper.service';
import { HyperResolver } from './hyper.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Hyper } from './entities/hyper.entity';
import { Hyper as HyperGraphQL } from './domain/hyper';
import { CreateHyperInput } from './dto/create-hyper.input';

@Module({
  providers: [HyperResolver, HyperService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Hyper])],
      resolvers: [
        {
          EntityClass: Hyper,
          DTOClass: HyperGraphQL,
          CreateDTOClass: CreateHyperInput,
        },
      ],
    }),
  ],
})
export class HyperModule {}
