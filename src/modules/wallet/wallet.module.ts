import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletResolver } from './wallet.resolver';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { Wallet as WalletGraphQL } from '@/modules/wallet/domain/wallet';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';
import { CreateOrGetWalletProvider } from '@/modules/wallet/providers/create-or-get-wallet.provider';
import { WalletHistoryModule } from '@/modules/wallet-history/wallet-history.module';
import { TransactionModule } from '@/modules/transaction/transaction.module';
import { UpdateWalletProvider } from '@/modules/wallet/providers/update-wallet.provider';

@Module({
  providers: [
    WalletResolver,
    WalletService,
    CreateOrGetWalletProvider,
    UpdateWalletProvider,
  ],
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
    WalletHistoryModule,
    TransactionModule,
  ],
  exports: [WalletService],
})
export class WalletModule {}
