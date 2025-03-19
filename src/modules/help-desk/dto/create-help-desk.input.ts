import { Field, InputType } from '@nestjs/graphql';
import { Image } from '@/modules/image/domain/image';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateHelpDeskInput {
  @Field()
  id: string;

  @Field()
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

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => User)
  user: User;
}
