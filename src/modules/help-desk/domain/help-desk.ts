import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class HelpDesk {
  @IDField(() => ID)
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
