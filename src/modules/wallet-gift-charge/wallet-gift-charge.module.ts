import { Module } from '@nestjs/common';
import { WalletGiftChargeService } from './wallet-gift-charge.service';
import { WalletGiftChargeResolver } from './wallet-gift-charge.resolver';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/entities/wallet-gift-charge.entity';
import { WalletGiftCharge as WalletGiftChargeGraphQL } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateWalletGiftChargeInput } from '@/modules/wallet-gift-charge/dto/create-wallet-gift-charge.input';

@Module({
  providers: [WalletGiftChargeResolver, WalletGiftChargeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([WalletGiftCharge])],
      resolvers: [
        {
          EntityClass: WalletGiftCharge,
          DTOClass: WalletGiftChargeGraphQL,
          CreateDTOClass: CreateWalletGiftChargeInput,
        },
      ],
    }),
  ],
})
export class WalletGiftChargeModule {}
