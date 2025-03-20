import { Field, InputType } from '@nestjs/graphql';
import { CampaignRoomvoImage } from '@/modules/campaign-roomvo-image/domain/campaign-roomvo-image';
import { User } from '@/modules/user/domain/user';

@InputType('CreateCampaignRoomvoVoteInput')
export class CreateCampaignRoomvoVoteInput {
  @Field()
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
