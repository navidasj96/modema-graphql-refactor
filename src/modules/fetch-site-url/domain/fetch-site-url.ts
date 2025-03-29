import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('FetchSiteUrlDomain')
@ObjectType()
export class FetchSiteUrl {
  @IDField(() => ID)
  id: number;

  @Field()
  url: string;

  @Field()
  isFetch: boolean;

  @Field()
  date: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
