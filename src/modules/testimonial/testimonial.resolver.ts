import { Resolver } from '@nestjs/graphql';
import { TestimonialService } from './testimonial.service';
import { Testimonial } from '@/modules/testimonial/domain/testimonial';

@Resolver(() => Testimonial)
export class TestimonialResolver {
  constructor(private readonly testimonialService: TestimonialService) {}
}
