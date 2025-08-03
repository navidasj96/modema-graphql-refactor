import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('FetchSiteUrlPureDomain')
@ObjectType()
export class FetchSiteUrlPure {
  @Field(() => ID)
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
