import { ExitControlItemReportInput } from '@/modules/exit-control-item/dto/exit-control-item-report.input';
import { ExitControlItem } from '@/modules/exit-control-item/entities/exit-control-item.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class ExitControlItemReportProvider {
  constructor(
    /**
     * inject exitControlRepository
     */
    @InjectRepository(ExitControlItem)
    private readonly exitControlItemRepository: Repository<ExitControlItem>
  ) {}

  async exitControlList(
    ExitControlItemReportInput: ExitControlItemReportInput
  ) {
    const { fromDate, toDate, limit, offset, search, sort } =
      ExitControlItemReportInput;

    const exitControlListQuery = this.exitControlItemRepository
      .createQueryBuilder('exitControlItems')
      .select('exitControlItems')
      .innerJoinAndSelect('exitControlItems.exitControl', 'exitControl')
      .innerJoinAndSelect('exitControl.user', 'user')

      .innerJoinAndSelect(
        'exitControlItems.invoiceProductItem',
        'invoiceProductItem'
      )
      .innerJoinAndSelect('invoiceProductItem.invoiceProduct', 'invoiceProduct')
      .innerJoinAndSelect('invoiceProduct.invoice', 'invoice')
      .innerJoinAndSelect('invoice.invoiceAddresses', 'invoiceAddresses')
      .innerJoinAndSelect('invoiceProduct.product', 'product')
      .innerJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .innerJoinAndSelect('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoinAndSelect('subproduct.basicCarpetColor', 'basicCarpetColor')
      .addOrderBy('exitControl.exitDate', 'DESC');

    if (fromDate) {
      exitControlListQuery.andWhere('exitControl.exitDate >= :fromDate', {
        fromDate,
      });
    }

    if (toDate) {
      exitControlListQuery.andWhere('exitControl.exitDate <= :toDate', {
        toDate,
      });
    }
    if (limit) {
      exitControlListQuery.take(limit);
    }
    if (offset) {
      exitControlListQuery.skip(offset);
    }

    if (search) {
      const like = `%${search}%`;
      exitControlListQuery.andWhere(
        new Brackets((qb) => {
          qb.where('exitControlItems.id LIKE :like', { like })
            .orWhere('exitControlItems.boxNo LIKE :like', { like })
            .orWhere('exitControl.id LIKE :like', { like })
            .orWhere('exitControl.driverPhone LIKE :like', { like })
            .orWhere('exitControl.plateNo LIKE :like', { like })
            .orWhere('prod.name LIKE :like', { like })
            .orWhere('bcs.title LIKE :like', { like })
            .orWhere('bcc.title LIKE :like', { like })
            .orWhere('bcs.code LIKE :like', { like })
            .orWhere('bcc.code LIKE :like', { like })
            .orWhere('profile.versionNo LIKE :like', { like })
            .orWhere('printRip.ripNumber LIKE :like', { like });
        })
      );
    }
    const exitControlList = await exitControlListQuery.getMany();
    return exitControlList;
  }
}
