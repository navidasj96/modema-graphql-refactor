import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CrmPresentationPureDomain')
@ObjectType()
export class CrmPresentationPure {
  @Field(() => ID)
  mobile?: string;

  @Field({ nullable: true })
  optionId?: number;
}
