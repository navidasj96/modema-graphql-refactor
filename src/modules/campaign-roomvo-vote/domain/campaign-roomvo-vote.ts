import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CampaignRoomvoImage } from '@/modules/campaign-roomvo-image/domain/campaign-roomvo-image';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class CampaignRoomvoVote {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  campaignRoomvoImageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CampaignRoomvoImage)
  campaignRoomvoImage: CampaignRoomvoImage;

  @Field(() => User)
  user: User;
}
