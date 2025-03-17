import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { Wallet as WalletGraphQL } from '@/modules/wallet/domain/wallet';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';

@Module({
  providers: [WalletResolver, WalletService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Wallet])],
      resolvers: [
        {
          EntityClass: Wallet,
          DTOClass: WalletGraphQL,
          CreateDTOClass: CreateWalletInput,
        },
      ],
    }),
  ],
})
export class WalletModule {}
