import { Injectable } from '@nestjs/common';
import { CreateCitiesSepidarInput } from './dto/create-cities-sepidar.input';
import { UpdateCitiesSepidarInput } from './dto/update-cities-sepidar.input';

@Injectable()
export class CitiesSepidarService {
  create(createCitiesSepidarInput: CreateCitiesSepidarInput) {
    return 'This action adds a new citiesSepidar';
  }

  findAll() {
    return `This action returns all citiesSepidar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} citiesSepidar`;
  }

  update(id: number, updateCitiesSepidarInput: UpdateCitiesSepidarInput) {
    return `This action updates a #${id} citiesSepidar`;
  }

  remove(id: number) {
    return `This action removes a #${id} citiesSepidar`;
  }
}
