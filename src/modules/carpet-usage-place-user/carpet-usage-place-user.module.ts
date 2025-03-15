import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetUsagePlaceUser } from './entities/carpet-usage-place-user.entity';
import { CarpetUsagePlaceUser as CarpetUsagePlaceUserGraphQL } from './domain/carpet-usage-place-user';
import { CreateCarpetUsagePlaceUserInput } from './dto/create-carpet-usage-place-user.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetUsagePlaceUser])],
      resolvers: [
        {
          EntityClass: CarpetUsagePlaceUser,
          DTOClass: CarpetUsagePlaceUserGraphQL,
          CreateDTOClass: CreateCarpetUsagePlaceUserInput,
        },
      ],
    }),
  ],
})
export class CarpetUsagePlaceUserModule {}
