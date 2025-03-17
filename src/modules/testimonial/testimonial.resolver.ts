import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TestimonialService } from './testimonial.service';
import { CreateTestimonialInput } from './dto/create-testimonial.input';
import { UpdateTestimonialInput } from './dto/update-testimonial.input';
import { Testimonial } from '@/modules/testimonial/domain/testimonial';

@Resolver(() => Testimonial)
export class TestimonialResolver {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Mutation(() => Testimonial)
  createTestimonial(
    @Args('createTestimonialInput')
    createTestimonialInput: CreateTestimonialInput,
  ) {
    return this.testimonialService.create(createTestimonialInput);
  }

  @Query(() => [Testimonial], { name: 'testimonial' })
  findAll() {
    return this.testimonialService.findAll();
  }

  @Query(() => Testimonial, { name: 'testimonial' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.testimonialService.findOne(id);
  }

  @Mutation(() => Testimonial)
  updateTestimonial(
    @Args('updateTestimonialInput')
    updateTestimonialInput: UpdateTestimonialInput,
  ) {
    return this.testimonialService.update(
      updateTestimonialInput.id,
      updateTestimonialInput,
    );
  }

  @Mutation(() => Testimonial)
  removeTestimonial(@Args('id', { type: () => Int }) id: number) {
    return this.testimonialService.remove(id);
  }
}
