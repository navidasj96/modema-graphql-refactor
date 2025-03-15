import { Injectable } from '@nestjs/common';
import { CreateDesignersProductPriceRangeInput } from './dto/create-designers-product-price-range.input';
import { UpdateDesignersProductPriceRangeInput } from './dto/update-designers-product-price-range.input';

@Injectable()
export class DesignersProductPriceRangeService {
  create(createDesignersProductPriceRangeInput: CreateDesignersProductPriceRangeInput) {
    return 'This action adds a new designersProductPriceRange';
  }

  findAll() {
    return `This action returns all designersProductPriceRange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} designersProductPriceRange`;
  }

  update(id: number, updateDesignersProductPriceRangeInput: UpdateDesignersProductPriceRangeInput) {
    return `This action updates a #${id} designersProductPriceRange`;
  }

  remove(id: number) {
    return `This action removes a #${id} designersProductPriceRange`;
  }
}
