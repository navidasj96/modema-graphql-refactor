import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { SendToChaparProvider } from '@/modules/external-api/providers/send-to-chapar.provider';
import { SendToChaparInput } from '@/modules/external-api/dtos/send-to-chapar-input';

@Injectable()
export class ExternalApiService {
  constructor(
    /**
     * inject sendToChaparProvicer
     */
    private readonly sendToChaparProvider: SendToChaparProvider
  ) {}

  async sendToChapar(sendToChaparInput: SendToChaparInput) {
    return await this.sendToChaparProvider.sendToChapar(sendToChaparInput);
  }
}
