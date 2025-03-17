import { Module } from '@nestjs/common';
import { RetargetingWalletChargeService } from './retargeting-wallet-charge.service';
import { RetargetingWalletChargeResolver } from './retargeting-wallet-charge.resolver';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/entities/retargeting-wallet-charge.entity';
import { RetargetingWalletCharge as RetargetingWalletChargeGraphQL } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRetargetingWalletChargeInput } from '@/modules/retargeting-wallet-charge/dto/create-retargeting-wallet-charge.input';

@Module({
  providers: [RetargetingWalletChargeResolver, RetargetingWalletChargeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RetargetingWalletCharge])],
      resolvers: [
        {
          EntityClass: RetargetingWalletCharge,
          DTOClass: RetargetingWalletChargeGraphQL,
          CreateDTOClass: CreateRetargetingWalletChargeInput,
        },
      ],
    }),
  ],
})
export class RetargetingWalletChargeModule {}
