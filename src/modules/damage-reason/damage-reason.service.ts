import { Injectable } from '@nestjs/common';
import { CreateDamageReasonInput } from './dto/create-damage-reason.input';
import { UpdateDamageReasonInput } from './dto/update-damage-reason.input';
import { FindOneOptions, Repository } from 'typeorm';
import { DamageReason } from '@/modules/damage-reason/entities/damage-reason.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DamageReasonService {
  constructor(
    /**
     * inject damageReasonRepository
     */
    @InjectRepository(DamageReason)
    private readonly damageReasonRepository: Repository<DamageReason>
  ) {}
  create(createDamageReasonInput: CreateDamageReasonInput) {
    return 'This action adds a new damageReason';
  }

  findAll() {
    return `This action returns all damageReason`;
  }

  async findOne(options: FindOneOptions<DamageReason>) {
    return await this.damageReasonRepository.findOne(options);
  }

  update(id: number, updateDamageReasonInput: UpdateDamageReasonInput) {
    return `This action updates a #${id} damageReason`;
  }

  remove(id: number) {
    return `This action removes a #${id} damageReason`;
  }
}
