import { SettingService } from '@/modules/setting/setting.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SnappAuthenticationControllerProvider {
  constructor(
    /**
     * inject settingService
     */
    private readonly settingService: SettingService
  ) {}

  public async getOrCreateSnappToken() {}
}
