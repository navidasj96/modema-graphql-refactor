import { ProductionPadProductionPadStatusService } from '@/modules/production-pad-production-pad-status/production-pad-production-pad-status.service';
import { ProductionPadRollService } from '@/modules/production-pad-roll/production-pad-roll.service';
import { CreateCarpetPadInput } from '@/modules/production-pad/dto/create-carpet-pad.input';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { SettingService } from '@/modules/setting/setting.service';
import { SubproductService } from '@/modules/subproduct/subproduct.service';
import { ProductionPadStatusEnum } from '@/utils/production-pad-status.enum';
import { Injectable } from '@nestjs/common';
import { Between, DataSource } from 'typeorm';
import { BasicCarpetSizeService } from '@/modules/basic-carpet-size/basic-carpet-size.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { PrintCarpetPadLabelsInput } from '@/modules/production-pad/dto/print-carpet-pad-labels.input';
import { PrintCarpetPadLabelsOutputTs } from '@/modules/production-pad/dto/print-carpet-pad-labels.output';

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
      const startAndEndRowNo: PrintCarpetPadLabelsOutputTs[] = [];
      for (const { sizeId, count } of sizesWithCount) {
        if (count > 0) {
          const subproduct = await this.subproductService.findOne({
            where: {
              isActive: 1,
              product: { isActive: 1 },
              basicCarpetSizeId: Number(sizeId),
            },
            relations: ['product'],
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
          let startRowNo = 0;
          for (let i = 0; i < Number(count); i++) {
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
            productionPad.createdAt = new Date();
            productionPad.updatedAt = new Date();
            productionPad.productionPadRollId = productionPadRollId;
            await productionPadRepository.save(productionPad);

            await this.productionPadProductionPadStatusService.attach(
              productionPad.id,
              productionPad.productionPadStatusId,
              userId,
              manager
            );
          }

          const endRowNo = maxRowNoForSize || 0;
          startAndEndRowNo.push({
            startNo: startRowNo,
            endNo: endRowNo,
            count: Number(count),
            sizeId: Number(sizeId),
          });
        }
      }

      await queryRunner.commitTransaction();

      return {
        printCarpetPadLabels: startAndEndRowNo,
        message: 'پدها با موفقیت ایجاد شدند',
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        printCarpetPadLabels: null,
        message: `${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }

  async printCarpetPadLabels(
    printCarpetPadLabelsInput: PrintCarpetPadLabelsInput
  ) {
    const { endRowNo, startRowNo, sizeId } = printCarpetPadLabelsInput;

    const productionPads = await this.dataSource
      .getRepository(ProductionPad)
      .find({
        where: {
          rowNo: Between(startRowNo, endRowNo),
          basicCarpetSizeId: sizeId,
        },
        relations: { basicCarpetSize: true },
      });
    const queryRunner = this.dataSource.createQueryRunner();
    const manager = queryRunner.manager;

    const productionPadRepository = manager.getRepository(ProductionPad);
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const productionPad of productionPads) {
        productionPad.isTagPrinted = 1;
        await productionPadRepository.save(productionPad);
      }
      await queryRunner.commitTransaction();

      return {
        productionPads,
        message: 'برچسب ها با موفقیت چاپ شد',
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        productionPads: [],
        message: `${error}`,
        status: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
