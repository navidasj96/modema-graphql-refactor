import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetColorInput } from './dto/create-basic-carpet-color.input';
import { UpdateBasicCarpetColorInput } from './dto/update-basic-carpet-color.input';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/entities/basic-carpet-color.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BasicCarpetColorService {
  constructor(
    /**
     * inject basicCarpetColorRepository
     */
    @InjectRepository(BasicCarpetColor)
    private readonly basicCarpetColorRepository: Repository<BasicCarpetColor>
  ) {}
  create(createBasicCarpetColorInput: CreateBasicCarpetColorInput) {
    return 'This action adds a new basicCarpetColor';
  }

  findAll() {
    return `This action returns all basicCarpetColor`;
  }

  async findOne(options: FindOneOptions<BasicCarpetColor>) {
    return await this.basicCarpetColorRepository.findOne(options);
  }

  update(id: number, updateBasicCarpetColorInput: UpdateBasicCarpetColorInput) {
    return `This action updates a #${id} basicCarpetColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetColor`;
  }
}
