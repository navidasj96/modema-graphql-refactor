import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateWebsitePageInput')
export class CreateWebsitePageInput {
  @Field()
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
