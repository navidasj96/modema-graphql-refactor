import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Border {
  @IDField(() => ID)
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  count?: number;
}
