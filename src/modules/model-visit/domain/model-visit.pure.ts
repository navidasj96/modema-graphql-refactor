import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ModelVisitPureDomain')
@ObjectType()
export class ModelVisitPure {
  @Field(() => ID)
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

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
