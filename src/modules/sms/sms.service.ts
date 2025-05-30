import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as soap from 'soap';

@Injectable()
export class SmsService {
  constructor(private configService: ConfigService) {}

  async sendWithPattern({
    to,
    text,
    bodyId,
  }: {
    to: string;
    text: string;
    bodyId: string;
  }) {
    const client = await soap.createClientAsync(
      'https://api.payamak-panel.com/post/send.asmx?wsdl',
      {
        wsdl_headers: { 'Content-Type': 'application/soap+xml' },
      }
    );

    const payload = {
      username: this.configService.get('general.FARAPAYAMAK_USERNAME'),
      password: this.configService.get('general.FARAPAYAMAK_PASSWORD'),
      from: this.configService.get('general.FARAPAYAMAK_PHONE_NUMBER'),
      to,
      text,
      isFlash: false,
      bodyId,
    };

    return client.SendByBaseNumber2Async(payload);
  }
}
