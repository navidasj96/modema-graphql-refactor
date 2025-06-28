import { Inject, Injectable, Request, Scope } from '@nestjs/common';
import { CreateSubproductInput } from './dto/create-subproduct.input';
import { UpdateSubproductInput } from './dto/update-subproduct.input';
import { REQUEST } from '@nestjs/core';
import { FindOneOptions, Repository } from 'typeorm';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubproductService {
  constructor(
    /**
     * inject subproductRepository
     */
    @InjectRepository(Subproduct)
    private readonly subproductRepository: Repository<Subproduct>
  ) {}

  create(createSubproductInput: CreateSubproductInput) {
    return 'This action adds a new subproduct';
  }

  findAll() {
    return `This action returns all subproduct`;
  }

  async findOne(options: FindOneOptions<Subproduct>) {
    return await this.subproductRepository.findOne(options);
  }

  update(id: number, updateSubproductInput: UpdateSubproductInput) {
    return `This action updates a #${id} subproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} subproduct`;
  }

  async changeColorBasedOnProduct(productId: number) {
    const subproducts = await this.subproductRepository.find({
      where: {
        productId: productId,
      },
      relations: {
        basicCarpetColor: true,
      },
    });

    const seen = new Set<number>();
    const uniqueColors: { id: number; title: string }[] = [];

    for (const sub of subproducts) {
      const color = sub.basicCarpetColor;
      if (color && !seen.has(color.id)) {
        seen.add(color.id);
        uniqueColors.push({ id: color.id, title: color.title });
      }
    }

    return uniqueColors;
  }
}
