import { AuthModule } from '@/modules/auth/auth.module';
import { PrintProfile as PrintProfileGraphQL } from '@/modules/print-profile/domain/print-profile';
import { CreatePrintProfileInput } from '@/modules/print-profile/dto/create-print-profile.input';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { ChangeActivePrintProfileProvider } from '@/modules/print-profile/providers/change-active-print-profile.provider';
import { PrintProfileProvider } from '@/modules/print-profile/providers/print-profile.provider';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { PrintProfileResolver } from './print-profile.resolver';
import { PrintProfileService } from './print-profile.service';

@Module({
  providers: [
    PrintProfileResolver,
    PrintProfileService,
    ChangeActivePrintProfileProvider,
    PrintProfileProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PrintProfile])],
      resolvers: [
        {
          EntityClass: PrintProfile,
          DTOClass: PrintProfileGraphQL,
          CreateDTOClass: CreatePrintProfileInput,
        },
      ],
    }),
    AuthModule,
  ],
  exports: [PrintProfileService],
})
export class PrintProfileModule {}
