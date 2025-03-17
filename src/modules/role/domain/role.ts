import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Role {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  guardName: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
