import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRateInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
