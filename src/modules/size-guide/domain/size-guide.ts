import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SizeGuide {
  @IDField(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
