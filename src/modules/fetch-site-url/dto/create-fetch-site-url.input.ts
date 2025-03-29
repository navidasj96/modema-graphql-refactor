import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateFetchSiteUrlInput')
export class CreateFetchSiteUrlInput {
  @Field()
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
