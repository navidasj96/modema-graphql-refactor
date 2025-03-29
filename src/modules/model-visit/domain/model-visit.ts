import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('ModelVisitDomain')
@ObjectType()
export class ModelVisit {
  @IDField(() => ID)
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
