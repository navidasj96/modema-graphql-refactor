import { ImagePure } from '@/modules/image/domain/image.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignVotingImagePureDomain')
@ObjectType()
export class CampaignVotingImagePure {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  campaignNo: number;

  @Field({ defaultValue: 1 })
  sortOrder: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure)
  image: ImagePure;
}
