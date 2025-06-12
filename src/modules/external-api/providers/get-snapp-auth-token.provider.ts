import { GetSnappAuthTokenInput } from '@/modules/external-api/dtos/get-snapp-auth-token-input';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as qs from 'qs';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { AxiosError, AxiosRequestConfig } from 'axios';

@Injectable()
export class GetSnappAuthTokenProvider {
  constructor(
    /**
     * inject httpService
     */
    private readonly httpService: HttpService
  ) {}

  public async getSnappAuthToken(credintials: GetSnappAuthTokenInput) {
    const {
      snappApiUsername,
      snappApiPassword,
      snappApiClientSecret,
      snappApiGrantType,
      snappApiScope,
      snappApiClientId,
      thirdPartiesProxy,
      snappApiEndpoint,
    } = credintials;

    const authHeader =
      'Basic ' +
      Buffer.from(`${snappApiClientId}:${snappApiClientSecret}`).toString(
        'base64'
      );
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: authHeader,
    };

    const body = qs.stringify({
      grant_type: snappApiGrantType,
      snappApiScope,
      snappApiUsername,
      snappApiPassword,
    });

    const url = '/api/online/v1/oauth/token';
    let proxyConfig: AxiosRequestConfig['proxy'] = undefined;
    if (thirdPartiesProxy) {
      const proxyUrl = new URL(thirdPartiesProxy);
      proxyConfig = {
        host: proxyUrl.hostname,
        port: parseInt(proxyUrl.port, 10),
      };
    }
    try {
      const response = await firstValueFrom(
        this.httpService
          .post(url, body, {
            url: snappApiEndpoint,
            headers,
            proxy: proxyConfig,
            timeout: 120000,
          })
          .pipe(
            map((res) => {
              return {
                status: true,
                ...res.data,
              };
            }),
            catchError((error: AxiosError) => {
              return of({ status: false });
            })
          )
      );

      return response;
    } catch (error) {
      return { status: false };
    }
  }
}
