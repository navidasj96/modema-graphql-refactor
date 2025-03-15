import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHyperInput {
  @Field()
  code: string;

  @Field({ nullable: true })
  depot?: number;

  @Field({ nullable: true })
  produce?: number;
}
