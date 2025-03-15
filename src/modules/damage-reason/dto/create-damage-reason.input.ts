import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDamageReasonInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  department: string;

  @Field()
  cause: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
