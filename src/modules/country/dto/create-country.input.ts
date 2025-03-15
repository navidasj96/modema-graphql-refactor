import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  sortName?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phoneCode?: number;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
