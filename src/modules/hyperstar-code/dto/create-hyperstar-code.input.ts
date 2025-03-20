import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateHyperstarCodeInput')
export class CreateHyperstarCodeInput {
  @Field()
  code: string;

  @Field({ nullable: true })
  subproductCode?: string;
}
