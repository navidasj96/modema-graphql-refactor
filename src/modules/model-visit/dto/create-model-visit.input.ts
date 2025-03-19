import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateModelVisitInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  modelName: string;

  @Field()
  modelId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User, { nullable: true })
  user?: User;
}
