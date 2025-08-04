import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SitemapStaticPagePureDomain')
@ObjectType()
export class SitemapStaticPagePure {
  @Field(() => ID)
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
