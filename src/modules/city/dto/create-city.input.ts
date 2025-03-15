import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field()
  id: number;

  @Field()
  stateId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  mahexCode?: string;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
