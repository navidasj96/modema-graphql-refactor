import { Module } from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { TestimonialResolver } from './testimonial.resolver';
import { Testimonial } from '@/modules/testimonial/entities/testimonial.entity';
import { Testimonial as TestimonialGraphQL } from '@/modules/testimonial/domain/testimonial';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTestimonialInput } from '@/modules/testimonial/dto/create-testimonial.input';

@Module({
  providers: [TestimonialResolver, TestimonialService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Testimonial])],
      resolvers: [
        {
          EntityClass: Testimonial,
          DTOClass: TestimonialGraphQL,
          CreateDTOClass: CreateTestimonialInput,
        },
      ],
    }),
  ],
})
export class TestimonialModule {}
