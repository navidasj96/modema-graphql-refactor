import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('HeardAboutUsOptionPureDomain')
@ObjectType()
export class HeardAboutUsOptionPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ defaultValue: 1 })
  sortOrder: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [UserPure])
  users: UserPure[];
}
