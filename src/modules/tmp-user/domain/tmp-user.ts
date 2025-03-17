import { ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class TmpUser {
  @IDField(() => ID)
  userId?: string;
}
