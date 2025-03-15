import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNeedsPhotographySubproductInput {
  @Field()
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
}
