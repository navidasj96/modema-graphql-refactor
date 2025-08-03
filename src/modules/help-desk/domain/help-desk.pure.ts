import { ImagePure } from '@/modules/image/domain/image.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('HelpDeskPureDomain')
@ObjectType()
export class HelpDeskPure {
  @Field(() => ID)
  id: string;

  @Field(() => UserPure)
  userId: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  isOnline?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => UserPure)
  user: UserPure;
}
