import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStateInput {
  @Field()
  id: number;

  @Field()
  countryId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
