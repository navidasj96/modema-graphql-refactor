import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceProductItemService } from '@/modules/invoice-product-item/invoice-product-item.service';
import { CreateProductionRollInput } from '@/modules/production-roll/dto/create-production-roll.input';
import { ProductionRollInput } from '@/modules/production-roll/dto/production-roll-list.input';
import { ProductionRollWastageInput } from '@/modules/production-roll/dto/production-roll-wastage.input';
import { UpdateProductionRollInput } from '@/modules/production-roll/dto/update-production-roll.input';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { UserService } from '@/modules/user/user.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

@Injectable()
export class ProductionRollProvider {
  constructor(
    /**
     * inject productionRollRepository
     */
    @InjectRepository(ProductionRoll)
    private readonly productionRollRepository: Repository<ProductionRoll>,
    /**
     * inject invoiceProductItemService
     */
    @Inject(forwardRef(() => InvoiceProductItemService))
    private readonly invoiceProductItemService: InvoiceProductItemService,
    /**
     * inject userService
     */
    private readonly userService: UserService
  ) {}

  async productionRollList(productionRollInput: ProductionRollInput) {
    const { isShaggy, search, limit, offset } = productionRollInput;

    const productionRollQuery = this.productionRollRepository
      .createQueryBuilder('productionRoll')

      .leftJoinAndSelect(
        'ProductionReceipt',
        'receipt',
        'receipt.productionRollId = productionRoll.id'
      )
      .where('productionRoll.isShaggy = :isShaggy', {
        isShaggy: isShaggy ? 1 : 0,
      })
      .orderBy('productionRoll.id', 'DESC');

    if (limit) {
      productionRollQuery.take(limit);
    }
    if (offset) {
      productionRollQuery.skip(offset);
    }

    if (search.length > 0) {
      productionRollQuery
        .where('productionRoll.rollNumber LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('productionRoll.billNumber LIKE :search', {
          search: `%${search}%`,
        })
        .orWhere('receipt.receiptNumber LIKE :search', {
          search: `%${search}%`,
        });
    }

    const [productionRolls, count] =
      await productionRollQuery.getManyAndCount();
    return { productionRolls, count };
  }

  async create(
    createProductionRollInput: CreateProductionRollInput,
    context: { req: UserContext }
  ) {
    const { rollNumber, width, length, weight, isShaggy, billNumber } =
      createProductionRollInput;
    const {
      user: { sub: userId },
    } = context.req;
    const productionRoll = this.productionRollRepository.create({
      rollNumber,
      width,
      length,
      weight,
      isShaggy,
      billNumber,
      createdBy: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    try {
      const productionRollWithSameRollNumber =
        await this.productionRollRepository.findOne({
          where: { rollNumber },
        });
      if (productionRollWithSameRollNumber) {
        return {
          message: 'شماره رول انتخابی قبلا در سیستم وارد شده است',
          status: false,
        };
      } else {
        await this.productionRollRepository.save(productionRoll);
        return {
          message: 'Production roll created successfully',
          status: true,
        };
      }
    } catch {
      return {
        message: 'Failed to create production roll',
        status: false,
      };
    }
  }

  async closeProductionRoll(
    productionRollId: number,
    context: { req: UserContext }
  ) {
    const productionRoll = await this.productionRollRepository.findOne({
      where: { id: productionRollId, isClosed: 0 },
    });
    const {
      user: { sub: userId },
    } = context.req;
    if (!productionRoll) {
      return {
        message: 'رول انتخابی قبلا بسته شده است',
        status: false,
      };
    }

    try {
      productionRoll.isClosed = 1;
      productionRoll.closedBy = userId;
      productionRoll.closeDate = new Date();
      productionRoll.updatedAt = new Date();
      await this.productionRollRepository.save(productionRoll);
      return {
        message: 'رول انتخابی شما با موفقیت بسته شد.',
        status: true,
      };
    } catch (error) {
      return {
        message: `خطا در بسته شدن رول: ${error}`,
        status: false,
      };
    }
  }

  async productionRollWastage(
    productionRollWastageInput: ProductionRollWastageInput
  ) {
    const { productionRollIds, limit, offset } = productionRollWastageInput;
    const productionRollsQuery = this.productionRollRepository
      .createQueryBuilder('production_rolls')
      .select([
        'production_rolls.id AS id',
        'production_rolls.roll_number AS rollNumber',
        'production_rolls.width AS width',
        'production_rolls.length AS length',
        'production_rolls.weight AS weight',
        'production_rolls.bill_number AS billNumber',
        'production_rolls.close_date AS closeDate',
        'production_rolls.is_shaggy AS isShaggy',
        'production_rolls.shaggy_color AS shaggyColor',
        'production_rolls.is_closed AS isClosed',
        'production_rolls.created_at AS createdAt',
        'production_rolls.updated_at AS updatedAt',
        'production_rolls.created_by AS createdBy',
        'production_rolls.closed_by AS closedBy',
      ])
      .addSelect((subQuery) => {
        return subQuery
          .select('SUM(bcs.width * bcs.length)', 'produced_area')
          .from('invoice_product_items', 'ipi')
          .innerJoin('invoice_products', 'ip', 'ip.id = ipi.invoice_product_id')
          .innerJoin('subproducts', 'sp', 'sp.id = ip.subproduct_id')
          .innerJoin(
            'basic_carpet_sizes',
            'bcs',
            'bcs.id = sp.basic_carpet_size_id'
          )
          .where(`ipi.current_status_id NOT IN (:...notDamagedStatus)`)
          .andWhere('ipi.production_roll_id = production_rolls.id');
      }, 'producedArea')
      .addSelect((subQuery) => {
        return subQuery
          .select('SUM(bcs.width * bcs.length)', 'damagedArea')
          .from('invoice_product_items', 'ipi')
          .innerJoin('invoice_products', 'ip', 'ip.id = ipi.invoice_product_id')
          .innerJoin('subproducts', 'sp', 'sp.id = ip.subproduct_id')
          .innerJoin(
            'basic_carpet_sizes',
            'bcs',
            'bcs.id = sp.basic_carpet_size_id'
          )
          .where(`ipi.current_status_id IN (:...damagedStatus)`)
          .andWhere('ipi.production_roll_id = production_rolls.id');
      }, 'damagedArea')
      .whereInIds(productionRollIds)
      .groupBy('production_rolls.id')
      .orderBy('production_rolls.rollNumber', 'DESC')
      .setParameters({
        notDamagedStatus: [InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION],
        damagedStatus: [InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION],
      });

    // Clone for count query
    const countQuery = productionRollsQuery.clone();
    const count = await countQuery.getCount();

    const productionRollWastage = await productionRollsQuery.getRawMany();
    return {
      productionRollWastage,
      count,
    };
  }

  async printRollsTags(productionRollId: number) {
    const invoiceProductItems =
      await this.invoiceProductItemService.invoiceProductItemForPrintProductTag(
        productionRollId
      );

    return invoiceProductItems;
  }

  async updateProductionRoll(
    updateProductionRollInput: UpdateProductionRollInput
  ) {
    if (
      !updateProductionRollInput.rollNumber ||
      updateProductionRollInput.rollNumber.trim() === ''
    ) {
      return {
        message: 'شماره رول نمی تواند خالی باشد',
        status: false,
      };
    }
    const sameProductionRoll = await this.productionRollRepository.findOne({
      where: {
        id: Not(updateProductionRollInput.id),
        rollNumber: updateProductionRollInput.rollNumber,
      },
    });

    if (sameProductionRoll) {
      return {
        message: 'شماره رول انتخابی قبلا در سیستم وارد شده است',
        status: false,
      };
    }

    const productionRoll = await this.productionRollRepository.findOne({
      where: { id: updateProductionRollInput.id },
    });

    if (!productionRoll) {
      return {
        message: 'رول انتخابی یافت نشد',
        status: false,
      };
    }

    Object.assign(productionRoll, updateProductionRollInput);
    try {
      await this.productionRollRepository.save({
        ...productionRoll,
        updatedAt: new Date(),
      });
      return {
        message: 'رول با موفقیت به روز رسانی شد',
        status: true,
      };
    } catch {
      return {
        message: 'خطا در به روز رسانی رول',
        status: false,
      };
    }
  }

  async deleteProductionRoll(productionRollId: number) {
    const productionRoll = await this.productionRollRepository.findOne({
      where: { id: productionRollId },
    });

    if (!productionRoll) {
      return {
        message: 'رول انتخابی یافت نشد',
        status: false,
      };
    }

    try {
      await this.productionRollRepository.remove(productionRoll);
      return {
        message: 'رول با موفقیت حذف شد',
        status: true,
      };
    } catch {
      return {
        message: `این رول در حال حاضر در حال استفاده است و نمی تواند حذف شود`,
        status: false,
      };
    }
  }
}
