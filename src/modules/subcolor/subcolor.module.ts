import { Module } from '@nestjs/common';
import { SubcolorService } from './subcolor.service';
import { SubcolorResolver } from './subcolor.resolver';
import { Subcolor } from '@/modules/subcolor/entities/subcolor.entity';
import { Subcolor as SubcolorGraphQL } from '@/modules/subcolor/domain/subcolor';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSubcolorInput } from '@/modules/subcolor/dto/create-subcolor.input';

@Module({
  providers: [SubcolorResolver, SubcolorService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Subcolor])],
      resolvers: [
        {
          EntityClass: Subcolor,
          DTOClass: SubcolorGraphQL,
          CreateDTOClass: CreateSubcolorInput,
        },
      ],
    }),
  ],
})
export class SubcolorModule {}
