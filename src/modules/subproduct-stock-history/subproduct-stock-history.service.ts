import { Injectable } from '@nestjs/common';
import { CreateSubproductStockHistoryInput } from './dto/create-subproduct-stock-history.input';
import { UpdateSubproductStockHistoryInput } from './dto/update-subproduct-stock-history.input';

@Injectable()
export class SubproductStockHistoryService {
  create(createSubproductStockHistoryInput: CreateSubproductStockHistoryInput) {
    return 'This action adds a new subproductStockHistory';
  }

  findAll() {
    return `This action returns all subproductStockHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subproductStockHistory`;
  }

  update(
    id: number,
    updateSubproductStockHistoryInput: UpdateSubproductStockHistoryInput
  ) {
    return `This action updates a #${id} subproductStockHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subproductStockHistory`;
  }
}
