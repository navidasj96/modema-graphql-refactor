import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnTypeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
