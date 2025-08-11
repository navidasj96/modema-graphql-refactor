import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateBasicCarpetSizeInput } from './dto/create-basic-carpet-size.input';
import { UpdateBasicCarpetSizeInput } from './dto/update-basic-carpet-size.input';

@Injectable()
export class BasicCarpetSizeService {
  constructor(
    /**
     * inject basicCarpetSizeRepository
     */
    @InjectRepository(BasicCarpetSize)
    private readonly basicCarpetSizeRepository: Repository<BasicCarpetSize>
  ) {}
  create(createBasicCarpetSizeInput: CreateBasicCarpetSizeInput) {
    return 'This action adds a new basicCarpetSize';
  }

  async findAll(options: FindManyOptions<BasicCarpetSize>) {
    return await this.basicCarpetSizeRepository.find(options);
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetSize`;
  }

  async find(options: FindManyOptions<BasicCarpetSize>) {
    return await this.basicCarpetSizeRepository.find(options);
  }

  update(id: number, updateBasicCarpetSizeInput: UpdateBasicCarpetSizeInput) {
    return `This action updates a #${id} basicCarpetSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetSize`;
  }
}
