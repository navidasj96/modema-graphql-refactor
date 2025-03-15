import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CrmPresentation {
  @IDField(()=>ID)
  mobile?: string;

  @Field({ nullable: true })
  optionId?: number;
}
