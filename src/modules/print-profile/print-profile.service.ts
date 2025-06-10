import { Injectable } from '@nestjs/common';
import { CreatePrintProfileInput } from './dto/create-print-profile.input';
import { UpdatePrintProfileInput } from './dto/update-print-profile.input';
import { FindOneOptions, Repository } from 'typeorm';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PrintProfileService {
  constructor(
    /**
     * inject printProfileRepository
     */
    @InjectRepository(PrintProfile)
    private readonly printProfileRepository: Repository<PrintProfile>
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
}
