import { CheckPasswordWithPhpApi } from '@/modules/external-api/check-password-with-php-api';
import { CheckPasswordWithPhpApiInput } from '@/modules/external-api/dtos/check-password-with-php-api-input';
import { GetSnappAuthTokenInput } from '@/modules/external-api/dtos/get-snapp-auth-token-input';
import { SendToChaparInput } from '@/modules/external-api/dtos/send-to-chapar-input';
import { GetSnappAuthTokenProvider } from '@/modules/external-api/providers/get-snapp-auth-token.provider';
import { SendToChaparProvider } from '@/modules/external-api/providers/send-to-chapar.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalApiService {
  constructor(
    /**
     * inject sendToChaparProvicer
     */
    private readonly sendToChaparProvider: SendToChaparProvider,
    /**
     * inject getSnappAuthTokenProvider
     */
    private readonly getSnappAuthTokenProvider: GetSnappAuthTokenProvider,
    /**
     * inject checkPasswordWithPhpApi
     */
    private readonly checkPasswordWithPhpApi: CheckPasswordWithPhpApi
  ) {}

  async sendToChapar(sendToChaparInput: SendToChaparInput) {
    return await this.sendToChaparProvider.sendToChapar(sendToChaparInput);
  }

  async getSnappAuthToken(credintials: GetSnappAuthTokenInput) {
    return await this.getSnappAuthTokenProvider.getSnappAuthToken(credintials);
  }

  async checkPasswordWithPhp(credentials: CheckPasswordWithPhpApiInput) {
    return await this.checkPasswordWithPhpApi.checkPasswordWithPhpApi(
      credentials
    );
  }
}
