import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Ghazal {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  explanation?: string;

  @Field({ nullable: true })
  poem?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
