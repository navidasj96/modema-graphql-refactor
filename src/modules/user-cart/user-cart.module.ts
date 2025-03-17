import { Module } from '@nestjs/common';
import { UserCartService } from './user-cart.service';
import { UserCartResolver } from './user-cart.resolver';
import { UserCart } from '@/modules/user-cart/entities/user-cart.entity';
import { UserCart as UserCartGraphQL } from '@/modules/user-cart/domain/user-cart';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateUserCartInput } from '@/modules/user-cart/dto/create-user-cart.input';

@Module({
  providers: [UserCartResolver, UserCartService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserCart])],
      resolvers: [
        {
          EntityClass: UserCart,
          DTOClass: UserCartGraphQL,
          CreateDTOClass: CreateUserCartInput,
        },
      ],
    }),
  ],
})
export class UserCartModule {}
