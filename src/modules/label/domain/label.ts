import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Label {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  textColor: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
