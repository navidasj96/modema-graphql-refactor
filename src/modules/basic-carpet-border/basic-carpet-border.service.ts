import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetBorderInput } from './dto/create-basic-carpet-border.input';
import { UpdateBasicCarpetBorderInput } from './dto/update-basic-carpet-border.input';
import { Repository } from 'typeorm';
import { BasicCarpetBorder } from './entities/basic-carpet-border.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BasicCarpetBorderService {
  constructor(
    /**
     * Inject basicCarpetBorderRepository
     */
    @InjectRepository(BasicCarpetBorder)
    private readonly basicCarpetBorderRepository: Repository<BasicCarpetBorder>
  ) {}

  create(createBasicCarpetBorderInput: CreateBasicCarpetBorderInput) {
    return 'This action adds a new basicCarpetBorder';
  }

  findAll() {
    return `This action returns all basicCarpetBorder`;
  }

  async findOne(id: number) {
    return await this.basicCarpetBorderRepository.findOne({ where: { id } });
  }

  update(
    id: number,
    updateBasicCarpetBorderInput: UpdateBasicCarpetBorderInput
  ) {
    return `This action updates a #${id} basicCarpetBorder`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetBorder`;
  }
}
