import { Injectable } from '@nestjs/common';
import { CreateTestimonialInput } from './dto/create-testimonial.input';
import { UpdateTestimonialInput } from './dto/update-testimonial.input';

@Injectable()
export class TestimonialService {
  create(createTestimonialInput: CreateTestimonialInput) {
    return 'This action adds a new testimonial';
  }

  findAll() {
    return `This action returns all testimonial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testimonial`;
  }

  update(id: number, updateTestimonialInput: UpdateTestimonialInput) {
    return `This action updates a #${id} testimonial`;
  }

  remove(id: number) {
    return `This action removes a #${id} testimonial`;
  }
}
