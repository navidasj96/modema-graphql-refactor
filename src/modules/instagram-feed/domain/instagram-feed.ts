import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('InstagramFeedDomain')
@ObjectType()
export class InstagramFeed {
  @IDField(() => ID)
  id: number;

  @Field()
  instagramId: string;

  @Field({ nullable: true })
  shortCode?: string;

  @Field({ nullable: true })
  createdTime?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  link?: string;

  @Field({ nullable: true })
  imageLowResolutionUrl?: string;

  @Field({ nullable: true })
  imageThumbnailUrl?: string;

  @Field({ nullable: true })
  imageStandardResolutionUrl?: string;

  @Field({ nullable: true })
  imageHighResolutionUrl?: string;

  @Field({ nullable: true })
  squareImages?: string;

  @Field({ nullable: true })
  carouselMedia?: string;

  @Field({ nullable: true })
  caption?: string;

  @Field({ nullable: true })
  isCaptionEdited?: boolean;

  @Field({ nullable: true })
  isAd?: boolean;

  @Field({ nullable: true })
  videoLowResolutionUrl?: string;

  @Field({ nullable: true })
  videoStandardResolutionUrl?: string;

  @Field({ nullable: true })
  videoDuration?: string;

  @Field({ nullable: true })
  videoLowBandwidthUrl?: string;

  @Field({ nullable: true })
  videoViews?: number;

  @Field({ nullable: true })
  owner?: string;

  @Field({ nullable: true })
  ownerId?: string;

  @Field({ nullable: true })
  likesCount?: number;

  @Field({ nullable: true })
  locationId?: string;

  @Field({ nullable: true })
  locationName?: string;

  @Field({ nullable: true })
  commentsDisabled?: boolean;

  @Field({ nullable: true })
  commentsCount?: number;

  @Field({ nullable: true })
  comments?: string;

  @Field({ nullable: true })
  hasMoreComments?: boolean;

  @Field({ nullable: true })
  commentsNextPage?: string;

  @Field({ nullable: true })
  sidecarMedias?: string;

  @Field({ nullable: true })
  locationSlug?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  locationAddressJson?: string;

  @Field({ nullable: true })
  isNew?: boolean;

  @Field({ nullable: true })
  isLoaded?: boolean;

  @Field({ nullable: true })
  isLoadEmpty?: boolean;

  @Field({ nullable: true })
  isFake?: boolean;

  @Field({ nullable: true })
  isAutoConstruct?: boolean;

  @Field({ nullable: true })
  modified?: string;

  @Field({ nullable: true })
  data?: string;

  @Field({ nullable: true })
  downloadedImageLowResolutionUrl?: string;

  @Field({ nullable: true })
  downloadedImageThumbnailUrl?: string;

  @Field({ nullable: true })
  downloadedImageStandardResolutionUrl?: string;

  @Field({ nullable: true })
  downloadedImageHighResolutionUrl?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
