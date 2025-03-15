import { Injectable } from '@nestjs/common';
import { CreatePatternLayerInput } from './dto/create-pattern-layer.input';
import { UpdatePatternLayerInput } from './dto/update-pattern-layer.input';

@Injectable()
export class PatternLayerService {
  create(createPatternLayerInput: CreatePatternLayerInput) {
    return 'This action adds a new patternLayer';
  }

  findAll() {
    return `This action returns all patternLayer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patternLayer`;
  }

  update(id: number, updatePatternLayerInput: UpdatePatternLayerInput) {
    return `This action updates a #${id} patternLayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} patternLayer`;
  }
}
