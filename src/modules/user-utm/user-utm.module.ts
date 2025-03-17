import { Module } from '@nestjs/common';
import { UserUtmService } from './user-utm.service';
import { UserUtmResolver } from './user-utm.resolver';
import { UserUtm } from '@/modules/user-utm/entities/user-utm.entity';
import { UserUtm as UserUtmGraphQL } from '@/modules/user-utm/domain/user-utm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateUserUtmInput } from '@/modules/user-utm/dto/create-user-utm.input';

@Module({
  providers: [UserUtmResolver, UserUtmService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserUtm])],
      resolvers: [
        {
          EntityClass: UserUtm,
          DTOClass: UserUtmGraphQL,
          CreateDTOClass: CreateUserUtmInput,
        },
      ],
    }),
  ],
})
export class UserUtmModule {}
