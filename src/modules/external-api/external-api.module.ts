import { Module } from '@nestjs/common';
import { ExternalApiService } from './external-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SendToChaparProvider } from '@/modules/external-api/providers/send-to-chapar.provider';
import { GetSnappAuthTokenProvider } from '@/modules/external-api/providers/get-snapp-auth-token.provider';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    ExternalApiService,
    SendToChaparProvider,
    GetSnappAuthTokenProvider,
  ],
  exports: [ExternalApiService],
})
export class ExternalApiModule {}
