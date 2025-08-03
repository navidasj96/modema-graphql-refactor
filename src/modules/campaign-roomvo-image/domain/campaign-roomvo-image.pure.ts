import { CampaignRoomvoVotePure } from '@/modules/campaign-roomvo-vote/domain/campaign-roomvo-vote.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignRoomvoImagePureDomain')
@ObjectType()
export class CampaignRoomvoImagePure {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [CampaignRoomvoVotePure])
  campaignRoomvoVotes: CampaignRoomvoVotePure[];
}
