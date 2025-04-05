import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { User } from './entities/user.entity';
import { User as UserGraphQL } from './domain/user';
import { CreateUserInput } from './dto/create-user.input';
import { ActivityModule } from '@/modules/activity/activity.module';
import { RoleModule } from '@/modules/role/role.module';
import { PermissionModule } from '@/modules/permission/permission.module';

@Module({
  providers: [UserResolver, UserService],
  exports: [UserService],
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
    forwardRef(() => ActivityModule),
    RoleModule,
    PermissionModule,
  ],
})
export class UserModule {}
