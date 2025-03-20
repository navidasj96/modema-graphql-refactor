import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTestimonialInput')
export class CreateTestimonialInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  logoImage?: string;

  @Field({ nullable: true })
  link?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
