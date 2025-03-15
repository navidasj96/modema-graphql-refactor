import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { User } from './entities/user.entity';
import { User as UserGraphQL } from './domain/user';
import { CreateUserInput } from './dto/create-user.input';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      resolvers: [
        {
          EntityClass: User,
          DTOClass: UserGraphQL,
          CreateDTOClass: CreateUserInput,
        },
      ],
    }),
  ],
})
export class UserModule {}
