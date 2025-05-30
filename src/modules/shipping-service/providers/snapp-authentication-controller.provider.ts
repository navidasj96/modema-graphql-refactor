import { SettingService } from '@/modules/setting/setting.service';
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql/error';
import { getDatePlusSeconds, nowGreaterThanOrEqualTo } from '@/utils/helpers';
import { ConfigService } from '@nestjs/config';
import { ExternalApiService } from '@/modules/external-api/external-api.service';

@Injectable()
export class SnappAuthenticationControllerProvider {
  constructor(
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject configService
     */
    private readonly configService: ConfigService,
    /**
     * inject externalApiService
     */
    private readonly externalApiService: ExternalApiService
  ) {}

  public async getOrCreateSnappToken() {
    const settings = await this.settingService.activeSetting();
    const now = new Date();
    if (!settings) {
      throw new GraphQLError('settings is not available');
    }
    let snappAuthenticationToken = settings.snappToken;
    const snappAuthenticationTokenExpiresAt = settings.snappTokenExpiresAt;

    if (
      !snappAuthenticationToken ||
      !snappAuthenticationTokenExpiresAt ||
      nowGreaterThanOrEqualTo(snappAuthenticationTokenExpiresAt)
    ) {
      const result = await this.getNewSnappAuthToken();

      if (result.status) {
        snappAuthenticationToken = result.access_token;
        const expiresIn = result.expires_in as number;
        const expireDate = getDatePlusSeconds(expiresIn);
        settings.snappToken = snappAuthenticationToken;
        settings.snappTokenExpiresAt = expireDate;
        await this.settingService.save(settings);
      }
    }
    return snappAuthenticationToken;
  }

  public async getNewSnappAuthToken() {
    const snappApiClientId = this.configService.get('general.SNAPP_CLIENT_ID');
    const snappApiClientSecret = this.configService.get(
      'general.SNAPP_CLIENT_SECRET'
    );
    const snappApiGrantType = this.configService.get(
      'general.SNAPP_API_GRANT_TYPE'
    );
    const snappApiScope = this.configService.get('general.SNAPP_API_SCOPE');
    const snappApiUsername = this.configService.get(
      'general.SNAPP_API_USERNAME'
    );
    const snappApiPassword = this.configService.get(
      'general.SNAPP_API_PASSWORD'
    );
    const snappApiEndpoint = this.configService.get(
      'general.SNAPP_API_ENDPOINT'
    );
    const thirdPartiesProxy = this.configService.get(
      'general.THIRD_PARTIES_PROXY'
    );

    const result = await this.externalApiService.getSnappAuthToken({
      snappApiScope,
      snappApiGrantType,
      snappApiPassword,
      snappApiUsername,
      snappApiEndpoint,
      snappApiClientId,
      snappApiClientSecret,
      thirdPartiesProxy,
    });
    return result;
  }
}
