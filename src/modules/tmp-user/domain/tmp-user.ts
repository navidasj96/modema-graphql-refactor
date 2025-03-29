import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('TmpUserDomain')
@ObjectType()
export class TmpUser {
  @IDField(() => ID)
  userId?: string;
}
