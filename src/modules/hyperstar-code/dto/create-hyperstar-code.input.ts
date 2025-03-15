import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHyperstarCodeInput {
  @Field()
  code: string;

  @Field({ nullable: true })
  subproductCode?: string;
}
