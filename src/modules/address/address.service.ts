import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor /**
   * Inject AddressRepository
   */(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) {}

  create(createAddressInput: CreateAddressInput) {
    return 'This action adds a new address';
  }

  findAll() {
    return `This action returns all address`;
  }

  async findOne(id: number) {
    return await this.addressRepository.findOne({ where: { id } });
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
