import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('NeedsPhotographySubproductPureDomain')
@ObjectType()
export class NeedsPhotographySubproductPure {
  @Field(() => ID)
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

  @Field(() => UserPure, { nullable: true })
  announcedUser?: UserPure;

  @Field(() => UserPure, { nullable: true })
  photographyUser?: UserPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;
}
