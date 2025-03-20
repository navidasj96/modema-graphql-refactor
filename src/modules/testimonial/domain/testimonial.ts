import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('TestimonialDomain')
@ObjectType()
export class Testimonial {
  @IDField(() => ID)
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
