import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { RipTemplateItemService } from '@/modules/rip-template-item/rip-template-item.service';
import { CreateRipTemplateInput } from '@/modules/rip-template/dto/create-rip-template.input';
import { UpdateRipTemplateInput } from '@/modules/rip-template/dto/update-rip-template.input';
import { RipTemplate } from '@/modules/rip-template/entities/rip-template.entity';
import { RipTemplatePermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class CreateRipTemplateProvider {
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

  async createRipTemplate(
    context: {
      req: UserContext;
    },
    createRipTemplateInput: CreateRipTemplateInput
  ) {
    const userCanEditRipTemplate = await this.authService.userPermissionCheck(
      [RipTemplatePermissions.PERMISSION_TO_CHANGE],
      context
    );
    const {
      req: {
        user: { sub },
      },
    } = context;
    if (!userCanEditRipTemplate) {
      return {
        message: 'دسترسی لازم برای ایجاد ریپ را ندارید',
        status: false,
      };
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;
    const ripTemplateRepository = manager.getRepository(RipTemplate);

    try {
      const createdRipTemplate = ripTemplateRepository.create({
        name: createRipTemplateInput.name,
        userId: sub,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await ripTemplateRepository.save(createdRipTemplate);
      const createRipTemplateResponse =
        await this.ripTemplateItemService.create(
          {
            id: createdRipTemplate.id,
            ripTemplateItemUpdate: createRipTemplateInput.ripTemplateItemUpdate,
          },
          manager
        );
      if (!createRipTemplateResponse.status) {
        await queryRunner.rollbackTransaction();
        return {
          message: createRipTemplateResponse.message,
          status: false,
        };
      }
      await queryRunner.commitTransaction();
      return {
        message: 'ریپ با موفقیت ایجاد شد',
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
