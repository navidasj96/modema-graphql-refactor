import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('TmpUserPureDomain')
@ObjectType()
export class TmpUserPure {
  @IDField(() => ID)
  userId?: string;
}
