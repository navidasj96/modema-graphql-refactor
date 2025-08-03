import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('GoogleFormUtmPureDomain')
@ObjectType()
export class GoogleFormUtmPure {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;
}
