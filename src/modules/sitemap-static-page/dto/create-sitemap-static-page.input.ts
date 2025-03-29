import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateSitemapStaticPageInput')
export class CreateSitemapStaticPageInput {
  @Field()
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
