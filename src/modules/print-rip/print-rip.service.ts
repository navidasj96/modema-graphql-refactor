import { Injectable } from '@nestjs/common';
import { CreatePrintRipInput } from './dto/create-print-rip.input';
import { UpdatePrintRipInput } from './dto/update-print-rip.input';
import { UpdatePrintRipProvider } from '@/modules/print-rip/providers/update-print-rip.provider';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreatePrintRipProvider } from '@/modules/print-rip/providers/create-print-rip.provider';
import { RipToPrintPrintRipsListProvider } from '@/modules/print-rip/providers/rip-to-print-print-rips-list.provider';

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
    private readonly ripToPrintPrintRipsListProvider: RipToPrintPrintRipsListProvider
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
}
