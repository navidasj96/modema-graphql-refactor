import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { HyperstarCode } from './entities/hyperstar-code.entity';
import { HyperstarCode as HyperstarCodeGraphQL } from './domain/hyperstar-code';
import { CreateHyperstarCodeInput } from './dto/create-hyperstar-code.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([HyperstarCode])],
      resolvers: [
        {
          EntityClass: HyperstarCode,
          DTOClass: HyperstarCodeGraphQL,
          CreateDTOClass: CreateHyperstarCodeInput,
        },
      ],
    }),
  ],
})
export class HyperstarCodeModule {}
