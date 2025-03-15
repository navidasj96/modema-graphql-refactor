import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ModemaAcceleratorImage {
  @IDField(() => ID)
  id: number;

  @Field()
  type: string;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  modemaAcceleratorId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
