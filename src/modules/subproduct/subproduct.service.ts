import { Inject, Injectable, Request, Scope } from '@nestjs/common';
import { CreateSubproductInput } from './dto/create-subproduct.input';
import { UpdateSubproductInput } from './dto/update-subproduct.input';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class SubproductService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  create(createSubproductInput: CreateSubproductInput) {
    return 'This action adds a new subproduct';
  }

  findAll() {
    return `This action returns all subproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subproduct`;
  }

  update(id: number, updateSubproductInput: UpdateSubproductInput) {
    return `This action updates a #${id} subproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} subproduct`;
  }
}
