import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { BasicCarpetSizeService } from '@/modules/basic-carpet-size/basic-carpet-size.service';
import { ProductionPadListInput } from '@/modules/production-pad/dto/prodcution-pad-list.input';
import { ProductionPad } from '@/modules/production-pad/entities/production-pad.entity';
import { ProductionPadPermissions } from '@/utils/permissions';
import { ProductionPadStatusEnum } from '@/utils/production-pad-status.enum';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    private readonly basicCarpetSizeService: BasicCarpetSizeService
  ) {}

  async productionPadList(
    productionPadListInput: ProductionPadListInput,
    context: { req: UserContext }
  ) {
    const columnMap: Record<number, string> = {
      1: 'productionPad.id',
      2: 'productionPad.requestDate',
      3: 'basicCarpetSize.title',
      4: 'productionPadStatus.name',
      5: 'ppps.createdAt',
      6: 'productionPad.code',
      7: 'productionPad.isTagPrinted',
      8: 'productionPad.isUsed',
      9: 'productionPad.rollRefCode',
      10: 'productionPad.rowNo',
      11: 'productionPad.id',
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
        { statusToView }
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
}
