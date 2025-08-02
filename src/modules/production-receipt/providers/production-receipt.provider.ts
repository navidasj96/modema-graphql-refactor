import { CreateProductionReceiptInput } from '@/modules/production-receipt/dto/create-production-receipt.input';
import { UpdateProductionReceiptInput } from '@/modules/production-receipt/dto/update-production-receipt.input';
import { ProductionReceipt } from '@/modules/production-receipt/entities/production-receipt.entity';
import { ProductionRollService } from '@/modules/production-roll/production-roll.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionReceiptProvider {
  constructor(
    /**
     * inject productionReceiptRepository
     */
    @InjectRepository(ProductionReceipt)
    private readonly productionReceiptRepository: Repository<ProductionReceipt>,
    /**
     * inject productionRollService
     */
    private readonly productionRollService: ProductionRollService
  ) {}

  async create(createProductionReceiptInput: CreateProductionReceiptInput) {
    const {
      count,
      receiptDate,
      receiptNumber,
      productionReceiptTypeId,
      weight,
      productionRollId,
    } = createProductionReceiptInput;

    const productionRoll = await this.productionRollService.findOne({
      where: { id: productionRollId },
    });

    const sameProductionReceiptNumber =
      await this.productionReceiptRepository.findOne({
        where: {
          receiptNumber: receiptNumber,
          productionRollId: productionRollId,
        },
      });
    if (productionRoll?.isClosed == 1) {
      return {
        message:
          'رول تولید انتخابی شما بسته شده و امکان ویرایش و یا درج اطلاعات جدید در آن وجود ندارد',
        status: false,
      };
    }

    if (sameProductionReceiptNumber) {
      return {
        message: 'شماره رسید انتخابی قبلا در سیستم وارد شده است',
        status: false,
      };
    }

    const productionReceipt = this.productionReceiptRepository.create({
      productionReceiptTypeId: productionReceiptTypeId,
      productionRollId: productionRollId,
      receiptNumber: receiptNumber,
      receiptDate: receiptDate,
      count: count,
      weight: weight,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    try {
      await this.productionReceiptRepository.save(productionReceipt);
      return {
        message: 'New production receipt successfully added.',
        status: true,
      };
    } catch (error) {
      return {
        message: `Failed to create production receipt: ${error}`,
        status: false,
      };
    }
  }

  //dto for update and create is the same
  async update(updateProductionReceiptInput: UpdateProductionReceiptInput) {
    const productionReceipt = await this.productionReceiptRepository.findOne({
      where: { id: updateProductionReceiptInput.id },
    });

    if (!productionReceipt) {
      return {
        message: 'Production receipt not found',
        status: false,
      };
    }

    Object.assign(productionReceipt, updateProductionReceiptInput);

    try {
      await this.productionReceiptRepository.save({
        ...productionReceipt,
        updatedAt: new Date(),
      });
      return {
        message: 'رسید تولید با موفقیت ویرایش شد',
        status: true,
      };
    } catch (error) {
      return {
        message: `Failed to update production receipt: ${error}`,
        status: false,
      };
    }
  }

  async delete(id: number) {
    const productionReceipt = await this.productionReceiptRepository.findOne({
      where: { id: id },
    });

    if (!productionReceipt) {
      return {
        message: 'Production receipt not found',
        status: false,
      };
    }

    try {
      await this.productionReceiptRepository.remove(productionReceipt);
      return {
        message: 'Production receipt successfully deleted',
        status: true,
      };
    } catch (error) {
      return {
        message: `Failed to delete production receipt: ${error}`,
        status: false,
      };
    }
  }
}
