import { Injectable } from '@nestjs/common';
import { CreateImagesSizeGuidesDetailInput } from './dto/create-images-size-guides-detail.input';
import { UpdateImagesSizeGuidesDetailInput } from './dto/update-images-size-guides-detail.input';

@Injectable()
export class ImagesSizeGuidesDetailService {
  create(createImagesSizeGuidesDetailInput: CreateImagesSizeGuidesDetailInput) {
    return 'This action adds a new imagesSizeGuidesDetail';
  }

  findAll() {
    return `This action returns all imagesSizeGuidesDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesSizeGuidesDetail`;
  }

  update(id: number, updateImagesSizeGuidesDetailInput: UpdateImagesSizeGuidesDetailInput) {
    return `This action updates a #${id} imagesSizeGuidesDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesSizeGuidesDetail`;
  }
}
