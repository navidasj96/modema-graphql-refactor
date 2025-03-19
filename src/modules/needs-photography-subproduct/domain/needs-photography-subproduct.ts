import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class NeedsPhotographySubproduct {
  @IDField(() => ID)
  id: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  announcedDate?: Date;

  @Field({ nullable: true })
  photographyDate?: Date;

  @Field({ nullable: true })
  announcedUserId?: number;

  @Field({ nullable: true })
  photographyUserId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => User, { nullable: true })
  announcedUser?: User;

  @Field(() => User, { nullable: true })
  photographyUser?: User;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;
}
