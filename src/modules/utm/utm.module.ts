import { Module } from '@nestjs/common';
import { UtmService } from './utm.service';
import { UtmResolver } from './utm.resolver';
import { Utm } from '@/modules/utm/entities/utm.entity';
import { Utm as UtmGraphQL } from '@/modules/utm/domain/utm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateUtmInput } from '@/modules/utm/dto/create-utm.input';

@Module({
  providers: [UtmResolver, UtmService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Utm])],
      resolvers: [
        {
          EntityClass: Utm,
          DTOClass: UtmGraphQL,
          CreateDTOClass: CreateUtmInput,
        },
      ],
    }),
  ],
})
export class UtmModule {}
