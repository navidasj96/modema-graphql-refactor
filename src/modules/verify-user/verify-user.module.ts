import { Module } from '@nestjs/common';
import { VerifyUserService } from './verify-user.service';
import { VerifyUserResolver } from './verify-user.resolver';
import { VerifyUser } from '@/modules/verify-user/entities/verify-user.entity';
import { VerifyUser as VerifyUserGraphQL } from '@/modules/verify-user/domain/verify-user';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVerifyUserInput } from '@/modules/verify-user/dto/create-verify-user.input';

@Module({
  providers: [VerifyUserResolver, VerifyUserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([VerifyUser])],
      resolvers: [
        {
          EntityClass: VerifyUser,
          DTOClass: VerifyUserGraphQL,
          CreateDTOClass: CreateVerifyUserInput,
        },
      ],
    }),
  ],
})
export class VerifyUserModule {}
