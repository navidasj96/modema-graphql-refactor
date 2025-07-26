import { ProductionPadProductionPadStatusService } from '@/modules/production-pad-production-pad-status/production-pad-production-pad-status.service';
import { ProductionPadRoll } from '@/modules/production-pad-roll/entities/production-pad-roll.entity';
import { ProductionPadRollService } from '@/modules/production-pad-roll/production-pad-roll.service';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { SubproductService } from '@/modules/subproduct/subproduct.service';
import { ProductionPadStatusEnum } from '@/utils/production-pad-status.enum';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BasicCarpetSizeService } from '@/modules/basic-carpet-size/basic-carpet-size.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

@Injectable()
export class CreatePadTagsProvider {
  constructor(
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource,
    /**
     * inject settingService
     */
    private readonly settingService: SettingService,
    /**
     * inject productionPadRollService
     */
    private readonly productionPadRollService: ProductionPadRollService,
    /**
     * inject subproductService
     */
    private readonly subproductService: SubproductService,
    /**
     * inject productionPadProductionPadStatusService
     */
    private readonly productionPadProductionPadStatusService: ProductionPadProductionPadStatusService,
    /**
     * inject basicCarpetSizeService
     */
    private readonly basicCarpetSizeService: BasicCarpetSizeService
  ) {}

  async createCarpetPads(
    createCarpetPadInput: CreateCarpetPadInput,
    context: { req: UserContext }
  ) {
    let { padRequestDate, productionPadRollId, sizesWithCount } =
      createCarpetPadInput;
    const {
      req: {
        user: { sub: userId },
      },
    } = context;
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;
    const productionPadRepository = manager.getRepository(ProductionPad);

    const settings = await this.settingService.activeSetting();
    const productionPadRolls = await this.productionPadRollService.findMany({
      where: { isClosed: 0 },
      order: { createdAt: 'DESC' },
    });
    const basicCarpetSizes = await this.basicCarpetSizeService.findAll({
      order: { sortOrder: 'ASC' },
    });
    const activeProductionPadRoll =
      settings && settings.padRollRefCode
        ? await this.productionPadRollService.findOne({
            where: { rollNumber: settings.padRollRefCode },
          })
        : null;

    if (activeProductionPadRoll) {
      productionPadRollId = activeProductionPadRoll.id;
    } else {
      productionPadRollId = productionPadRolls[0].id;
    }

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let startRowNo = 0;
      let endRowNo = 0;
      for (const [sizeId, count] of Object.entries(sizesWithCount)) {
        if (count > 0) {
          const subproduct = await this.subproductService.findOne({
            where: {
              isActive: 1,
              product: { isActive: 1 },
              basicCarpetSizeId: Number(sizeId),
            },
          });
          if (!subproduct) {
            await queryRunner.rollbackTransaction();
            return {
              message:
                'کالای پد انتخابی موجود نمی باشد. لطفا صفحه را مجددا باز کنید.',
              status: false,
            };
          }

          const pads = await productionPadRepository.find({
            where: { basicCarpetSizeId: Number(sizeId) },
            select: ['rowNo'],
          });

          let maxRowNoForSize = pads
            ? pads.length > 0
              ? Math.max(...pads.map((p) => p.rowNo))
              : null
            : null;

          for (let i = 0; i < Number(sizeId); i++) {
            if (!maxRowNoForSize) {
              maxRowNoForSize = 1;
            } else {
              maxRowNoForSize++;
            }

            if (startRowNo == 0) {
              startRowNo = maxRowNoForSize;
            }

            const productionPad = new ProductionPad();
            productionPad.basicCarpetSizeId = Number(sizeId);
            productionPad.productionPadStatusId =
              ProductionPadStatusEnum.REQUESTED;
            productionPad.code =
              (subproduct.code ?? '' + '_') + maxRowNoForSize;
            productionPad.isUsed = 0;
            productionPad.isTagPrinted = 0;
            productionPad.requestDate = new Date(padRequestDate);
            productionPad.rowNo = maxRowNoForSize;
            await productionPadRepository.save(productionPad);
            // productionPad.productionPadRollId = productionPadRollId;

            await this.productionPadProductionPadStatusService.attach(
              productionPad.id,
              productionPad.productionPadStatusId,
              userId,
              manager
            );
          }
        }
      }

      await queryRunner.commitTransaction();
      return {
        message: 'با موفقیت انجام شد',
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `${error}`,
        status: true,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
