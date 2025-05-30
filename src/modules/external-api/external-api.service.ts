import { Injectable } from '@nestjs/common';
import { SendToChaparProvider } from '@/modules/external-api/providers/send-to-chapar.provider';
import { SendToChaparInput } from '@/modules/external-api/dtos/send-to-chapar-input';
import { GetSnappAuthTokenProvider } from '@/modules/external-api/providers/get-snapp-auth-token.provider';
import { GetSnappAuthTokenInput } from '@/modules/external-api/dtos/get-snapp-auth-token-input';

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
    private readonly getSnappAuthTokenProvider: GetSnappAuthTokenProvider
  ) {}

  async sendToChapar(sendToChaparInput: SendToChaparInput) {
    return await this.sendToChaparProvider.sendToChapar(sendToChaparInput);
  }

  async getSnappAuthToken(credintials: GetSnappAuthTokenInput) {
    return await this.getSnappAuthTokenProvider.getSnappAuthToken(credintials);
  }
}
