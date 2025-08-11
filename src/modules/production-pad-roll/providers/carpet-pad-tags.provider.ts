import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { ProductionPadRoll } from '@/modules/production-pad-roll/entities/production-pad-roll.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { SettingsHistory } from '@/modules/settings-history/entities/settings-history.entity';
import { SettingsHistoryService } from '@/modules/settings-history/settings-history.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarpetPadTagsProvider {
  constructor(
    /**
     * inject productionPadRollRepository
     */
    @InjectRepository(ProductionPadRoll)
    private readonly productionPadRollRepository: Repository<ProductionPadRoll>,
    /**
     * inject settingHistoryService
     */
    private readonly settingsHistoryService: SettingsHistoryService,

    /**
     * inject settingService
     */
    private readonly settingService: SettingService
  ) {}

  async updatePadRollReferenceCode(
    rollReferenceCode: string,
    context: { req: UserContext }
  ) {
    const settings = await this.settingService.activeSetting();
    if (!settings) {
      throw new Error('No active settings found');
    }

    const {
      req: {
        user: { sub: userId },
      },
    } = context;

    const { id, ...restSettings } = settings;

    const settingHistory = {
      ...restSettings,
      settingId: settings.id,
      historyCreatedBy: userId,
      historyCreatedAt: new Date(),
      historyUpdatedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Partial<SettingsHistory>;
    try {
      await this.settingsHistoryService.save(settingHistory);
      await this.settingService.update(settings.id, {
        id: settings.id,
        rollReferenceCode: rollReferenceCode,
      });

      return {
        message:
          'کد رول تولید پد با موفقیت تغییر داده شد و از این پس برای تمام پدهایی که تولید می شوند این کد جدید در نظر گرفته خواهد شد',
        status: true,
      };
    } catch (error) {
      console.error('Error updating roll reference code:', error);
      return {
        message:
          'مشکلی در ثبت شماره رول تولید پد بوجود آمد. لطفا دوباره امتحان نمایید.',
        status: false,
      };
    }
  }
}
