import { CampaignRoomvoImagePure } from '@/modules/campaign-roomvo-image/domain/campaign-roomvo-image.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignRoomvoVotePureDomain')
@ObjectType()
export class CampaignRoomvoVotePure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  campaignRoomvoImageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CampaignRoomvoImagePure)
  campaignRoomvoImage: CampaignRoomvoImagePure;

  @Field(() => UserPure)
  user: UserPure;
}
