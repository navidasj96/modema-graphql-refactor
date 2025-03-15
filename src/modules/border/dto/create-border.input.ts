import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBorderInput {
  @Field()
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  count?: number;
}
