import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { BasicCarpetSizeService } from '@/modules/basic-carpet-size/basic-carpet-size.service';
import { ProductionPadProductionPadStatusService } from '@/modules/production-pad-production-pad-status/production-pad-production-pad-status.service';
import { ProductionPadStatusService } from '@/modules/production-pad-status/production-pad-status.service';
import { ProductionPadListInput } from '@/modules/production-pad/dto/prodcution-pad-list.input';
import { UpdateSelectedProductionPadsStatusInput } from '@/modules/production-pad/dto/update-selected-production-pads-status.input';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { SettingsHistory } from '@/modules/settings-history/entities/settings-history.entity';
import { SettingsHistoryService } from '@/modules/settings-history/settings-history.service';
import { ProductionPadPermissions } from '@/utils/permissions';
import { ProductionPadStatusEnum } from '@/utils/production-pad-status.enum';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, In, Repository } from 'typeorm';

@Injectable()
export class ProductionPadProvider {
  constructor(
    /**
     * inject productionPadRepository
     */
    @InjectRepository(ProductionPad)
    private readonly productionPadRepository: Repository<ProductionPad>,
    /**
     * inject authService
     */
    private readonly authService: AuthService,
    /**
     * inject basicCarpetSizeService
     */
    private readonly basicCarpetSizeService: BasicCarpetSizeService,
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,

    /**
     * inject settingsHistoryService
     */
    private readonly settingsHistoryService: SettingsHistoryService,

    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,

    /**
     * inject productionPadProductionPadStatusService
     */
    private readonly productionPadProductionPadStatusService: ProductionPadProductionPadStatusService,
    /**
     * inject ProductionPadStatusService
     */
    private readonly productionPadStatusService: ProductionPadStatusService
  ) {}

  async productionPadList(
    productionPadListInput: ProductionPadListInput,
    context: { req: UserContext }
  ) {
    const columnMap: Record<number, string> = {
      1: 'productionPad.requestDate',
      2: 'basicCarpetSize.title',
      3: 'productionPadStatus.name',
      4: 'productionPad.requestDate',
      5: 'productionPad.code',
      6: 'productionPad.isTagPrinted',
      7: 'productionPad.isUsed',
      8: 'productionPad.rollRefCode',
      9: 'productionPad.rowNo',
    };

    const { limit, offset, rollRefCode, sizeId, status, search, sort } =
      productionPadListInput;

    const statusToView = await this.statusToView(context);
    const productionPadQuery = this.productionPadRepository
      .createQueryBuilder('productionPad')
      .leftJoinAndSelect('productionPad.basicCarpetSize', 'basicCarpetSize')
      .leftJoinAndSelect(
        'productionPad.productionPadStatus',
        'productionPadStatus'
      )
      .leftJoin(
        'ProductionPadProductionPadStatus',
        'ppps',
        'ppps.productionPadId = productionPad.id AND ppps.productionPadStatusId = productionPad.productionPadStatusId'
      );

    if (limit) {
      productionPadQuery.take(limit);
    }
    if (offset) {
      productionPadQuery.skip(offset);
    }

    if (status) {
      productionPadQuery
        .andWhere('productionPad.productionPadStatusId  >= :status', {
          status: ProductionPadStatusEnum.PREPRODUCTION,
        })
        .andWhere('productionPad.productionPadStatusId = :status', { status });
    } else {
      productionPadQuery.andWhere(
        'productionPad.productionPadStatusId IN (:...statusToView)',
        {
          statusToView,
        }
      );
    }

    if (sizeId) {
      productionPadQuery.andWhere('productionPad.basicCarpetSizeId = :sizeId', {
        sizeId,
      });
    }

    if (rollRefCode) {
      productionPadQuery.andWhere('productionPad.rollRefCode = :rollRefCode', {
        rollRefCode,
      });
    }

    if (search && search.trim() !== '') {
      productionPadQuery
        .where('productionPad.id LIKE :search', { search: `%${search}%` })
        .orWhere('productionPad.code LIKE :search', { search: `%${search}%` })
        .orWhere('productionPad.rollRefCode LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('productionPad.rowNo LIKE :search', { search: `%${search}%` })
        .orWhere('productionPadStatus.name LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('basicCarpetSize.title LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('basicCarpetSize.code LIKE :search', {
          search: `%${search}%`,
        });
    }

    if (!sort) {
      productionPadQuery.addOrderBy('basicCarpetSize.title', 'DESC');
    } else {
      const direction = sort.direction.toUpperCase() as 'ASC' | 'DESC';
      const field = columnMap[sort.field];
      if (field) {
        productionPadQuery.addOrderBy(field, direction);
      }
    }

    const [productionPads, count] = await productionPadQuery.getManyAndCount();

    return {
      productionPads,
      count,
    };
  }

  async statusToView(context: { req: UserContext }) {
    const statusesToView: number[] = [];
    if (
      await this.authService.userPermissionCheck(
        [ProductionPadPermissions.PERMISSION_TO_VIEW_PADS_IN_REQUESTED],
        context
      )
    ) {
      statusesToView.push(ProductionPadStatusEnum.REQUESTED);
    }
    if (
      await this.authService.userPermissionCheck(
        [ProductionPadPermissions.PERMISSION_TO_VIEW_PADS_IN_PREPRODUCTION],
        context
      )
    ) {
      statusesToView.push(ProductionPadStatusEnum.PREPRODUCTION);
    }

    if (
      await this.authService.userPermissionCheck(
        [ProductionPadPermissions.PERMISSION_TO_VIEW_PADS_IN_FINISHED_CUTTING],
        context
      )
    ) {
      statusesToView.push(ProductionPadStatusEnum.FINISHED_CUTTING);
    }

    if (
      await this.authService.userPermissionCheck(
        [ProductionPadPermissions.PERMISSION_TO_VIEW_PADS_IN_FINISHED_SEWING],
        context
      )
    ) {
      statusesToView.push(ProductionPadStatusEnum.FINISHED_SEWING);
    }

    if (
      await this.authService.userPermissionCheck(
        [
          ProductionPadPermissions.PERMISSION_TO_VIEW_PADS_IN_RECEIVED_BY_REPOSITORY,
        ],
        context
      )
    ) {
      statusesToView.push(ProductionPadStatusEnum.RECEIVED_BY_REPOSITORY);
    }

    return statusesToView;
  }

  async statusToChange(context: { req: UserContext }) {
    const statusesToChange: number[] = [];

    if (
      await this.authService.userPermissionCheck(
        [
          ProductionPadPermissions.PERMISSION_TO_CHANGE_PRODUCTION_PAD_TO_PREPRODUCTION,
        ],
        context
      )
    ) {
      statusesToChange.push(ProductionPadStatusEnum.PREPRODUCTION);
    }

    if (
      await this.authService.userPermissionCheck(
        [
          ProductionPadPermissions.PERMISSION_TO_CHANGE_PRODUCTION_PAD_TO_FINISHED_CUTTING_FROM_PANEL,
        ],
        context
      )
    ) {
      statusesToChange.push(ProductionPadStatusEnum.FINISHED_CUTTING);
    }

    if (
      await this.authService.userPermissionCheck(
        [
          ProductionPadPermissions.PERMISSION_TO_CHANGE_PRODUCTION_PAD_TO_FINISHED_SEWING_FROM_PANEL,
        ],
        context
      )
    ) {
      statusesToChange.push(ProductionPadStatusEnum.FINISHED_SEWING);
    }

    if (
      await this.authService.userPermissionCheck(
        [
          ProductionPadPermissions.PERMISSION_TO_CHANGE_PRODUCTION_PAD_TO_RECEIVED_BY_REPOSITORY_FROM_PANEL,
        ],
        context
      )
    ) {
      statusesToChange.push(ProductionPadStatusEnum.RECEIVED_BY_REPOSITORY);
    }

    return statusesToChange;
  }

  async basicCarpetSizesAndRollRefCode() {
    const basicCarpetSizes = await this.basicCarpetSizeService.findAll({});
    // const rollRefCodes = await this.productionPadRepository
    //   .createQueryBuilder('productionPad')
    //   .where('productionPad.rollRefCode IS NOT NULL')
    //   .groupBy('productionPad.rollRefCode')
    //   .getMany();
    const rollRefCodes = await this.productionPadRepository
      .createQueryBuilder('productionPad')
      .select([
        'productionPad.rollRefCode AS rollRefCode',
        'MIN(productionPad.id) AS id', // or MAX, or ANY_VALUE if supported
      ])
      .where('productionPad.rollRefCode IS NOT NULL')
      .groupBy('productionPad.rollRefCode')
      .getRawMany();

    return {
      basicCarpetSizes,
      rollRefCodes,
    };
  }

  async updateRollReferenceCode(
    padRollRefCode: string,
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
        padRollRefCode: padRollRefCode,
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

  async updateSelectedProductionPadsStatus(
    updateSelectedProductionPadsStatusInput: UpdateSelectedProductionPadsStatusInput,
    context: { req: UserContext }
  ) {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;

    const { productionPadsIds, selectedStatusId } =
      updateSelectedProductionPadsStatusInput;

    const statusesToChange = await this.statusToChange(context);
    const settings = await this.settingService.activeSetting();
    if (!statusesToChange.includes(selectedStatusId)) {
      return {
        message: 'شما مجوز تغییر وضعیت این پد را ندارید',
        status: false,
      };
    }
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const productionPadRepository = manager.getRepository(ProductionPad);
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const productionPads = await productionPadRepository.find({
        where: { id: In(productionPadsIds) },
      });

      for (const productionPad of productionPads) {
        productionPad.productionPadStatusId = selectedStatusId;

        if (selectedStatusId == ProductionPadStatusEnum.PREPRODUCTION) {
          productionPad.rollRefCode = settings?.padRollRefCode || '';
        }

        await productionPadRepository.save(productionPad);
        await this.productionPadProductionPadStatusService.attach(
          productionPad.id,
          selectedStatusId,
          userId,
          manager
        );
      }
      await queryRunner.commitTransaction();

      return {
        message: 'وضعیت پدهای انتخاب شده با موفقیت تغییر داده شد.',
        status: true,
      };
    } catch {
      await queryRunner.rollbackTransaction();
      return {
        message:
          'مشکلی در تغییر وضعیت پدها بوجود آمد. لطفا دوباره امتحان نمایید.',
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }

  async productionPadProgress(productionPadId: number) {
    const productionPad = await this.productionPadRepository.findOne({
      where: { id: productionPadId },
      order: { updatedAt: 'DESC' },
      relations: {
        basicCarpetSize: true,
        productionPadStatus: true,
        productionPadProductionPadStatuses: {
          productionPadStatus: true,
          user: true,
        },
      },
    });

    const productionPadStatus =
      await this.productionPadStatusService.productionPadStatusById(
        productionPadId
      );

    return {
      productionPad,
      productionPadStatus,
    };
  }
}
