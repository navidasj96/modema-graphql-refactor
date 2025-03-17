import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class WebsitePage {
  @IDField(() => ID)
  id: number;

  @Field()
  key: string;

  @Field()
  value: string;

  @Field()
  page: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
