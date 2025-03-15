import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePreorderStatusInput {
  @Field()
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
