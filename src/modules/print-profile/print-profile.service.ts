import { Injectable } from '@nestjs/common';
import { CreatePrintProfileInput } from './dto/create-print-profile.input';
import { UpdatePrintProfileInput } from './dto/update-print-profile.input';
import { FindOneOptions, Repository } from 'typeorm';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangeActivePrintProfileProvider } from '@/modules/print-profile/providers/change-active-print-profile.provider';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

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
    private readonly changeActivePrintProfileProvider: ChangeActivePrintProfileProvider
  ) {}
  create(createPrintProfileInput: CreatePrintProfileInput) {
    return 'This action adds a new printProfile';
  }

  findAll() {
    return `This action returns all printProfile`;
  }

  async findOne(options: FindOneOptions<PrintProfile>) {
    return await this.printProfileRepository.findOne(options);
  }

  update(id: number, updatePrintProfileInput: UpdatePrintProfileInput) {
    return `This action updates a #${id} printProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} printProfile`;
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
}
