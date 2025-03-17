import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Video {
  @IDField(() => ID)
  id: number;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
