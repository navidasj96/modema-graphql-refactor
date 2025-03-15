import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class PrintRip {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  ripNumber: string;

  @Field()
  ripTemplateId: number;

  @Field({ nullable: true })
  userId?: number;
}
