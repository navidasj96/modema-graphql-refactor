import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateActivityInput')
export class CreateActivityInput {
  @Field(() => Number, { nullable: true })
  userId?: number;

  @Field()
  userName: string;

  @Field()
  contentId: number;

  @Field()
  contentType: string;

  @Field()
  action: string;

  @Field()
  description: string;

  @Field()
  details: string;

  @Field({ nullable: true })
  deletedUserId?: number;
}
