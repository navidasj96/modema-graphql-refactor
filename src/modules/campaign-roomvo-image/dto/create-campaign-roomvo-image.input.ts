import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { CampaignRoomvoVote } from '@/modules/campaign-roomvo-vote/domain/campaign-roomvo-vote';

@InputType('CreateCampaignRoomvoImageInput')
export class CreateCampaignRoomvoImageInput {
  @Field()
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

  @Field(() => User)
  user: User;

  @Field(() => [CampaignRoomvoVote])
  campaignRoomvoVotes: CampaignRoomvoVote[];
}
