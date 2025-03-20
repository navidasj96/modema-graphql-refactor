import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('CrmPresentationDomain')
@ObjectType()
export class CrmPresentation {
  @IDField(() => ID)
  mobile?: string;

  @Field({ nullable: true })
  optionId?: number;
}
