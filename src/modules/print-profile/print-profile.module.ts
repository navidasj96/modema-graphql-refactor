import { Module } from '@nestjs/common';
import { PrintProfileService } from './print-profile.service';
import { PrintProfileResolver } from './print-profile.resolver';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { PrintProfile as PrintProfileGraphQL } from '@/modules/print-profile/domain/print-profile';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePrintProfileInput } from '@/modules/print-profile/dto/create-print-profile.input';
import { ChangeActivePrintProfileProvider } from '@/modules/print-profile/providers/change-active-print-profile.provider';
import { AuthModule } from '@/modules/auth/auth.module';

@Module({
  providers: [
    PrintProfileResolver,
    PrintProfileService,
    ChangeActivePrintProfileProvider,
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
