import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SitemapStaticPage {
  @IDField(() => ID)
  id: number;

  @Field()
  loc: string;

  @Field()
  priority: number;

  @Field()
  changefreq: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
