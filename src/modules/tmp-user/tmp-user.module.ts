import { Module } from '@nestjs/common';
import { TmpUserService } from './tmp-user.service';
import { TmpUserResolver } from './tmp-user.resolver';
import { TmpUser } from '@/modules/tmp-user/entities/tmp-user.entity';
import { TmpUser as TmpUserGraphQL } from '@/modules/tmp-user/domain/tmp-user';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTmpUserInput } from '@/modules/tmp-user/dto/create-tmp-user.input';

@Module({
  providers: [TmpUserResolver, TmpUserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TmpUser])],
      resolvers: [
        {
          EntityClass: TmpUser,
          DTOClass: TmpUserGraphQL,
          CreateDTOClass: CreateTmpUserInput,
        },
      ],
    }),
  ],
})
export class TmpUserModule {}
