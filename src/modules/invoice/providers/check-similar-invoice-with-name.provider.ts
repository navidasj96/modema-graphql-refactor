import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';
import { CheckSimilarInvoiceWithNameOutput } from '@/modules/invoice/dto/check-similar-invoice-with-name.outpt.dto';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

import { NOT_SENT_INVOICE_STATUSES } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Not, Repository } from 'typeorm';

@Injectable()
export class CheckSimilarInvoiceWithNameProvider {
  constructor(
    /**
     * inject invoiceRepository
     */
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {}

  public async checkSimilarInvoiceWithName(
    userInfo: CheckSimilarInvoiceWithNameInput[]
  ) {
    const response: CheckSimilarInvoiceWithNameOutput[] = [];

    for (const user of userInfo) {
      const { userId, name } = user;
      try {
        const otherSimilarInvoice = await this.invoiceRepository
          .createQueryBuilder('invoice')
          .select('invoice.id')
          .innerJoin('invoice.user', 'user')
          .where('user.name LIKE :name', { name })
          .andWhere('user.id != :userId', { userId })
          .andWhere('invoice.currentInvoiceStatusId IN (:...statuses)', {
            statuses: NOT_SENT_INVOICE_STATUSES,
          })
          .getOne();
        if (otherSimilarInvoice) {
          response.push({
            id: userId,
            hasMultipleInvoice: true,
          });
        }
      } catch (error) {
        console.log('error', error);
      }
    }

    return response;
  }
}
