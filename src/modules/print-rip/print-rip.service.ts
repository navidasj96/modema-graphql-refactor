import { Injectable } from '@nestjs/common';
import { CreatePrintRipInput } from './dto/create-print-rip.input';
import { UpdatePrintRipInput } from './dto/update-print-rip.input';
import { UpdatePrintRipProvider } from '@/modules/print-rip/providers/update-print-rip.provider';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreatePrintRipProvider } from '@/modules/print-rip/providers/create-print-rip.provider';
import { RipToPrintPrintRipsListProvider } from '@/modules/print-rip/providers/rip-to-print-print-rips-list.provider';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { Repository } from 'typeorm';
import {
  INVOICE_PRODUCT_STATUSES_HEAT_AND_AFTER,
  InvoiceProductStatusEnum,
} from '@/utils/invoice-product-status';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PrintRipService {
  constructor(
    /**
     * inject updatePrintRipProvider
     */
    private readonly updatePrintRipProvider: UpdatePrintRipProvider,
    /**
     * inject createPrintRipProvider
     */
    private readonly createPrintRipProvider: CreatePrintRipProvider,
    /**
     * inject ipToPrintPrintRipsListProvider
     */
    private readonly ripToPrintPrintRipsListProvider: RipToPrintPrintRipsListProvider,
    /**
     * inject printRipRepository
     */
    @InjectRepository(PrintRip)
    private readonly printRipRepository: Repository<PrintRip>
  ) {}

  async create(
    context: {
      req: UserContext;
    },
    createPrintRipInput: CreatePrintRipInput
  ) {
    return await this.createPrintRipProvider.createPrintRip(
      context,
      createPrintRipInput
    );
  }

  findAll() {
    return `This action returns all printRip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} printRip`;
  }

  async update(
    context: {
      req: UserContext;
    },
    updatePrintRip: UpdatePrintRipInput
  ) {
    return await this.updatePrintRipProvider.updatePrintRip(
      context,
      updatePrintRip
    );
  }

  async ripToPrintPrintRipsList(context: { req: UserContext }) {
    return await this.ripToPrintPrintRipsListProvider.ripToPrintPrintRipsList(
      context
    );
  }

  remove(id: number) {
    return `This action removes a #${id} printRip`;
  }

  async printRipForDepot() {
    return await this.printRipRepository
      .createQueryBuilder('print_rips')
      .leftJoin('print_rips.invoiceProductItems', 'invoice_product_items')
      .where('invoice_product_items.current_status_id IN (:...statuses)', {
        statuses: INVOICE_PRODUCT_STATUSES_HEAT_AND_AFTER,
      })
      .groupBy('print_rips.id')
      .orderBy('print_rips.createdAt', 'DESC')
      .getOne();
  }
}
