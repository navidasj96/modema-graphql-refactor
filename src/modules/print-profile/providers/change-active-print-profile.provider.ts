import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { checkUserHasPermission } from '@/utils/helpers';
import { PrintProfilePermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { DataSource, Not } from 'typeorm';

@Injectable()
export class ChangeActivePrintProfileProvider {
  constructor(
    /**
     * inject authService
     */
    private readonly authService: AuthService,

    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource
  ) {}

  async changeActivePrintProfile(
    context: { req: UserContext },
    printProfileId: number
  ) {
    const { req } = context;
    const { user } = req;
    const { sub: userId } = user;
    //check user permission
    const userPermissions = await this.authService.getUserPermissions(
      req.user.sub
    );

    const { permissions } = userPermissions;
    if (
      !checkUserHasPermission(permissions, [
        PrintProfilePermissions.PERMISSION_TO_CHANGE,
      ])
    ) {
      return {
        message: 'شما دسترسی لازم برای تغییر پروفایل چاپ را ندارید',
        status: false,
      };
    }

    //use typeorm queryRunner
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const PrintProfileReposiorty = manager.getRepository(PrintProfile);

    const printProfile = await PrintProfileReposiorty.findOne({
      where: { id: printProfileId },
    });
    if (!printProfile) {
      return {
        message: 'پروفایل چاپ مورد نظر یافت نشد',
        status: false,
      };
    }
    printProfile.isActive = 1;
    printProfile.updatedBy = userId;

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const printProfileSaveResult =
        await PrintProfileReposiorty.save(printProfile);
      await PrintProfileReposiorty.update(
        {
          id: Not(printProfileId),
          isActive: 1,
        },
        {
          isActive: 0,
        }
      );
      await queryRunner.commitTransaction();
      return {
        message:
          'پروفایل رنگ با موفقیت ویرایش شد و از این پس این ورژن برای چاپ محصولات به کار گرفته خواهد شد.پروفایل چاپ با موفقیت تغییر کرد',
        status: true,
      };
    } catch {
      await queryRunner.rollbackTransaction();
      return {
        message:
          'مشکلی در تغییر پروفایل رنگ فعال بوجود آمد. لطفا دوباره امتحان نمایید.',
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
