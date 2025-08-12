import { CheckPasswordWithPhpApi } from '@/modules/external-api/check-password-with-php-api';
import { GetSnappAuthTokenProvider } from '@/modules/external-api/providers/get-snapp-auth-token.provider';
import { SendToChaparProvider } from '@/modules/external-api/providers/send-to-chapar.provider';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExternalApiService } from './external-api.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    ExternalApiService,
    SendToChaparProvider,
    GetSnappAuthTokenProvider,
    CheckPasswordWithPhpApi,
  ],
  exports: [ExternalApiService, CheckPasswordWithPhpApi],
})
export class ExternalApiModule {}
