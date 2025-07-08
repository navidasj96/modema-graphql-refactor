import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { RipTemplateItemService } from '@/modules/rip-template-item/rip-template-item.service';
import { UpdateRipTemplateInput } from '@/modules/rip-template/dto/update-rip-template.input';
import { RipTemplate } from '@/modules/rip-template/entities/rip-template.entity';
import { RipTemplatePermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UpdateRipTemplateProvider {
  constructor(
    /**
     * inject ripTemplateItemService
     */
    private readonly ripTemplateItemService: RipTemplateItemService,
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject authService
     */
    private readonly authService: AuthService
  ) {}

  async updateRipTemplate(
    context: {
      req: UserContext;
    },
    updateRipTemplateInput: UpdateRipTemplateInput
  ) {
    const userCanEditRipTemplate = await this.authService.userPermissionCheck(
      [RipTemplatePermissions.PERMISSION_TO_CHANGE],
      context
    );

    if (!userCanEditRipTemplate) {
      return {
        message: 'دسترسی لازم برای تغییر ریپ را ندارید',
        status: false,
      };
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;
    const ripTemplateRepository = manager.getRepository(RipTemplate);
    const { id, name } = updateRipTemplateInput;
    try {
      await ripTemplateRepository.update(id, { name });
      await this.ripTemplateItemService.update(updateRipTemplateInput, manager);
      await queryRunner.commitTransaction();

      return {
        message: `Rip Template : ${name} successfully edited`,
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
