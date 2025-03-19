import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateGoogleFormUtmInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  formId: string;

  @Field()
  url: string;

  @Field()
  utm: string;

  @Field({ defaultValue: false })
  status: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;
}
