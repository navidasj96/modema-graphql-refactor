import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreatePrintProfileInput } from '@/modules/print-profile/dto/create-print-profile.input';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { ChangeActivePrintProfileProvider } from '@/modules/print-profile/providers/change-active-print-profile.provider';
import { PrintProfileProvider } from '@/modules/print-profile/providers/print-profile.provider';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PrintProfileService {
  constructor(
    /**
     * inject printProfileRepository
     */
    @InjectRepository(PrintProfile)
    private readonly printProfileRepository: Repository<PrintProfile>,
    /**
     * inject changeActivePrintProfileProvider
     */
    private readonly changeActivePrintProfileProvider: ChangeActivePrintProfileProvider,
    /**
     * inject printProfileProvider
     */
    private readonly printProfileProvider: PrintProfileProvider
  ) {}

  async findOne(options: FindOneOptions<PrintProfile>) {
    return await this.printProfileRepository.findOne(options);
  }

  async changeActivePrintProfile(
    context: { req: UserContext },
    printProfileId: number
  ) {
    return await this.changeActivePrintProfileProvider.changeActivePrintProfile(
      context,
      printProfileId
    );
  }

  async printProfileList() {
    return this.printProfileProvider.printProfileList();
  }

  async createPrintProfile(
    createPrintProfileInput: CreatePrintProfileInput,
    context: { req: UserContext }
  ) {
    return this.printProfileProvider.createPrintProfile(
      createPrintProfileInput,
      context
    );
  }
}
