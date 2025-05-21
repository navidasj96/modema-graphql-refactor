import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, In } from 'typeorm';
import { SetInvoiceAsDepotForDigikalaResponseDto } from '@/modules/invoice/dto/set-invoice-as-depot-for-digikala-response.dto';

@Injectable()
export class SetInvoiceAsDepotForDigikalaProvider {
  constructor(
    /**
     * inject dataSource
     */
    private readonly dataSource: DataSource
  ) {}

  public async setInvoiceAsDepotForDigikala(
    ids: string[]
  ): Promise<SetInvoiceAsDepotForDigikalaResponseDto> {
    const invoiceIds = ids.map((id) => Number(id));
    const queryRunner = this.dataSource.createQueryRunner();

    //use typeorm queryRunner
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;
    const invoiceRepository = manager.getRepository(Invoice);
    try {
      const invoices = await invoiceRepository.find({
        where: {
          id: In(invoiceIds),
        },
      });

      if (invoices.length === 0) {
        await queryRunner.rollbackTransaction();
        return {
          message: `صورتحسابی با این شناسه ها پیدا نشد`,
          status: false,
        };
      }

      for (const invoice of invoices) {
        if (invoice.isDepot) {
          const updateInvoice: Invoice = {
            ...invoice,
            forDigikala: 1,
          };

          await invoiceRepository.save(updateInvoice);
        } else {
          await queryRunner.rollbackTransaction();
          return {
            message: `صورتحساب های انتخابی باید از نوع دپو باشند. شماره صورتحساب: ${invoice.invoiceNumber}`,
            status: false,
          };
        }
      }
      await queryRunner.commitTransaction();
      return {
        message:
          'صورتحساب های انتخابی با موفقیت به دپو برای دیجی کالا تغییر داده شد',
        status: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        message: `:${error}مشکلی در عملیات بوجود امده است`,

        status: true,
      };
    } finally {
      await queryRunner.release();
    }
  }
}
