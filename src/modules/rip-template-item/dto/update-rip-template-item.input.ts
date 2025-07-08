import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class RipTemplateItemUpdateEntryInput {
  @Field(() => Float)
  width: number;

  @Field(() => Float)
  length: number;
}

@InputType()
export class RipTemplateItemUpdatePairInput {
  @Field(() => Int)
  key: number;

  @Field(() => RipTemplateItemUpdateEntryInput)
  value: RipTemplateItemUpdateEntryInput;
}

@InputType()
export class UpdateRipTemplateItemInput {
  @Field(() => Int)
  id: number;

  @Field(() => [RipTemplateItemUpdatePairInput])
  ripTemplateItemUpdate: RipTemplateItemUpdatePairInput[];
}
