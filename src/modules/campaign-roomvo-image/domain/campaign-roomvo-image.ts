import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CampaignRoomvoImage {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field({ defaultValue: 0 })
  votesCount: number;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  originalFilename?: string;

  @Field({ nullable: true })
  mime?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
