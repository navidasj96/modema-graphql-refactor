import { Injectable } from '@nestjs/common';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';
import { Repository } from 'typeorm';
import { Setting } from '@/modules/setting/entities/setting.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SettingService {
  constructor(
    /**
     * Inject settingRepository
     */
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>
  ) {}

  create(createSettingInput: CreateSettingInput) {
    return 'This action adds a new setting';
  }

  async findAll() {
    return await this.settingRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, updateSettingInput: UpdateSettingInput) {
    return `This action updates a #${id} setting`;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }

  async activeSetting() {
    return await this.settingRepository.findOne({ where: { isActive: 1 } });
  }

  async save(setting: Setting) {
    return await this.settingRepository.save(setting);
  }

  async updateRollRefrenceCode(
    rollReferenceCode: string,
    rollReferenceCodeId: string
  ) {
    const setting = await this.activeSetting();
    if (setting) {
      try {
        setting.rollReferenceCode = rollReferenceCode;
        setting.productionRollId = Number(rollReferenceCodeId);
        await this.save(setting);
        return {
          message:
            'کد رول تولید با موفقیت تغییر داده شد و از این پس برای تمام آیتم هایی که به چاپ و هیت انتقال داده شوند این کد جدید در نظر گرفته خواهد شد',
          status: true,
        };
      } catch (error) {
        return {
          message: 'خطا در تغییر کد رول تولید، لطفا دوباره تلاش کنید',
          status: false,
        };
      }
    } else {
      return {
        message: 'تنظیمات فعالی برای تغییر کد رول تولید یافت نشد',
        status: false,
      };
    }
  }
}
