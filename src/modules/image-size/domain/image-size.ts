import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ImageSize {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  shortName: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
