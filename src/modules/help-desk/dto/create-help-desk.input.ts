import { Field, InputType } from '@nestjs/graphql';

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
}
