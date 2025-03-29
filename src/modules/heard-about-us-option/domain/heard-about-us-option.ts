import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('HeardAboutUsOptionDomain')
@ObjectType()
export class HeardAboutUsOption {
  @IDField(() => ID)
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

  @Field(() => [User])
  users: User[];
}
