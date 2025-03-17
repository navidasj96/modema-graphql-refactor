import { Module } from '@nestjs/common';
import { WalletHistoryService } from './wallet-history.service';
import { WalletHistoryResolver } from './wallet-history.resolver';
import { WalletHistory } from '@/modules/wallet-history/entities/wallet-history.entity';
import { WalletHistory as WalletHistoryGraphQL } from '@/modules/wallet-history/domain/wallet-history';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWalletHistoryInput } from '@/modules/wallet-history/dto/create-wallet-history.input';

@Module({
  providers: [WalletHistoryResolver, WalletHistoryService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WalletHistory])],
      resolvers: [
        {
          EntityClass: WalletHistory,
          DTOClass: WalletHistoryGraphQL,
          CreateDTOClass: CreateWalletHistoryInput,
        },
      ],
    }),
  ],
})
export class WalletHistoryModule {}
