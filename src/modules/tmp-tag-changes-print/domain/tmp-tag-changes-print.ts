import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('TmpTagChangesPrintDomain')
@ObjectType()
export class TmpTagChangesPrint {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  size?: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  count?: number;

  @Field({ nullable: true })
  oldCode?: string;
}
