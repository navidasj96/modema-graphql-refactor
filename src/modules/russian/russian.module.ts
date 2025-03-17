import { Module } from '@nestjs/common';
import { RussianService } from './russian.service';
import { RussianResolver } from './russian.resolver';
import { Russian } from '@/modules/russian/entities/russian.entity';
import { Russian as RussianGraphQL } from '@/modules/russian/domain/russian';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRussianInput } from '@/modules/russian/dto/create-russian.input';

@Module({
  providers: [RussianResolver, RussianService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Russian])],
      resolvers: [
        {
          EntityClass: Russian,
          DTOClass: RussianGraphQL,
          CreateDTOClass: CreateRussianInput,
        },
      ],
    }),
  ],
})
export class RussianModule {}
