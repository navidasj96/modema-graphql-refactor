import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateShippingServiceInput {
  @Field()
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  fullDescription?: string;

  @Field()
  isActive: boolean;
}
