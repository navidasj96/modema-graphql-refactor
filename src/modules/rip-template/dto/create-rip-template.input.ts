import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRipTemplateInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  name: string;

  @Field({ nullable: true })
  userId?: number;
}
