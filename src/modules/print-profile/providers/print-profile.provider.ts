import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreatePrintProfileInput } from '@/modules/print-profile/dto/create-print-profile.input';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

@Injectable()
export class PrintProfileProvider {
  constructor(
    /**
     * inject printProfileRepository
     */
    @InjectRepository(PrintProfile)
    private readonly printProfileRepository: Repository<PrintProfile>
  ) {}

  async printProfileList() {
    const printProfiles = await this.printProfileRepository.find({
      order: { versionChangeDate: 'DESC' },
    });

    return printProfiles;
  }

  async createPrintProfile(
    createPrintProfileInput: CreatePrintProfileInput,
    context: { req: UserContext }
  ) {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;

    const sameVersionNo = await this.printProfileRepository.findOne({
      where: {
        versionNo: createPrintProfileInput.versionNo,
      },
    });
    if (sameVersionNo) {
      return {
        message: 'پروفایل چاپ با این شماره نسخه وجود دارد',
        status: false,
      };
    }
    const printProfile = this.printProfileRepository.create({
      ...createPrintProfileInput,
      createdBy: userId,
      updatedBy: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    try {
      await this.printProfileRepository.save(printProfile);
      let comment = `پروفایل رنگ جدید با موفقیت اضافه شد`;
      if (printProfile.isActive) {
        await this.printProfileRepository.update(
          { isActive: 1, id: Not(printProfile.id) },
          { isActive: 0 }
        );
        comment +=
          ' و از این پس این ورژن برای چاپ محصولات به کار گرفته خواهد شد.';
      }
      return {
        message: comment,
        status: true,
      };
    } catch (error) {
      return {
        message: `Error creating print profile ${error}`,
        status: false,
      };
    }
  }
}
