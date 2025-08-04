import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('WebsitePagePureDomain')
@ObjectType()
export class WebsitePagePure {
  @Field(() => ID)
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
