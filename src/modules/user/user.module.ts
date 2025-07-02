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
import { CreateUserProvider } from '@/modules/user/providers/create-user.provider';
import { AuthModule } from '@/modules/auth/auth.module';
import { UserController } from '@/modules/user/user.controller';
import { UpdateUserProvider } from '@/modules/user/providers/update-user.provider';
import { UserTransactionListProvider } from '@/modules/user/providers/user-transaction-list.provider';
import { WalletHistoryModule } from '@/modules/wallet-history/wallet-history.module';
import { InvoiceHistoryModule } from '@/modules/invoice-history/invoice-history.module';
import { InvoicePaymentHistoryModule } from '@/modules/invoice-payment-history/invoice-payment-history.module';
import { UserRolesAndPermissionByIdProvider } from '@/modules/user/providers/user-roles-and-permission-by-id.provider';

@Module({
  providers: [
    UserResolver,
    UserService,
    CreateUserProvider,
    UpdateUserProvider,
    UserTransactionListProvider,
    UserRolesAndPermissionByIdProvider,
  ],
  exports: [UserService, CreateUserProvider, UpdateUserProvider],
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
    forwardRef(() => AuthModule),
    WalletHistoryModule,
    InvoiceHistoryModule,
    InvoicePaymentHistoryModule,
  ],
  controllers: [UserController],
})
export class UserModule {}
