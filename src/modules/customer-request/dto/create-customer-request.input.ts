import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerRequestInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  uuid?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
