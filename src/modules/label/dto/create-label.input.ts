import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLabelInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  textColor: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
