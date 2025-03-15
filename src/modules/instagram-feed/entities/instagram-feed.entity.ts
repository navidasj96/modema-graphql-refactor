import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('instagram_feeds_instagramid_unique', ['instagramId'], { unique: true })
@Entity('instagram_feeds', { schema: 'modema' })
export class InstagramFeed {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'instagramId', unique: true, length: 191 })
  instagramId: string;

  @Column('varchar', { name: 'shortCode', nullable: true, length: 191 })
  shortCode?: string;

  @Column('bigint', { name: 'createdTime', nullable: true })
  createdTime?: string;

  @Column('varchar', { name: 'type', nullable: true, length: 191 })
  type?: string;

  @Column('varchar', { name: 'link', nullable: true, length: 191 })
  link?: string;

  @Column('varchar', {
    name: 'imageLowResolutionUrl',
    nullable: true,
    length: 191,
  })
  imageLowResolutionUrl?: string;

  @Column('varchar', { name: 'imageThumbnailUrl', nullable: true, length: 191 })
  imageThumbnailUrl?: string;

  @Column('varchar', {
    name: 'imageStandardResolutionUrl',
    nullable: true,
    length: 191,
  })
  imageStandardResolutionUrl?: string;

  @Column('varchar', {
    name: 'imageHighResolutionUrl',
    nullable: true,
    length: 191,
  })
  imageHighResolutionUrl?: string;

  @Column('longtext', { name: 'squareImages', nullable: true })
  squareImages?: string;

  @Column('longtext', { name: 'carouselMedia', nullable: true })
  carouselMedia?: string;

  @Column('varchar', { name: 'caption', nullable: true, length: 191 })
  caption?: string;

  @Column('tinyint', { name: 'isCaptionEdited', nullable: true, width: 1 })
  isCaptionEdited?: boolean;

  @Column('tinyint', { name: 'isAd', nullable: true, width: 1 })
  isAd?: boolean;

  @Column('varchar', {
    name: 'videoLowResolutionUrl',
    nullable: true,
    length: 191,
  })
  videoLowResolutionUrl?: string;

  @Column('varchar', {
    name: 'videoStandardResolutionUrl',
    nullable: true,
    length: 191,
  })
  videoStandardResolutionUrl?: string;

  @Column('varchar', { name: 'videoDuration', nullable: true, length: 191 })
  videoDuration?: string;

  @Column('varchar', {
    name: 'videoLowBandwidthUrl',
    nullable: true,
    length: 191,
  })
  videoLowBandwidthUrl?: string;

  @Column('int', { name: 'videoViews', nullable: true })
  videoViews?: number;

  @Column('longtext', { name: 'owner', nullable: true })
  owner?: string;

  @Column('bigint', { name: 'ownerId', nullable: true })
  ownerId?: string;

  @Column('int', { name: 'likesCount', nullable: true })
  likesCount?: number;

  @Column('bigint', { name: 'locationId', nullable: true })
  locationId?: string;

  @Column('varchar', { name: 'locationName', nullable: true, length: 191 })
  locationName?: string;

  @Column('tinyint', { name: 'commentsDisabled', nullable: true, width: 1 })
  commentsDisabled?: boolean;

  @Column('int', { name: 'commentsCount', nullable: true })
  commentsCount?: number;

  @Column('longtext', { name: 'comments', nullable: true })
  comments?: string;

  @Column('tinyint', { name: 'hasMoreComments', nullable: true, width: 1 })
  hasMoreComments?: boolean;

  @Column('varchar', { name: 'commentsNextPage', nullable: true, length: 191 })
  commentsNextPage?: string;

  @Column('longtext', { name: 'sidecarMedias', nullable: true })
  sidecarMedias?: string;

  @Column('varchar', { name: 'locationSlug', nullable: true, length: 191 })
  locationSlug?: string;

  @Column('varchar', { name: 'altText', nullable: true, length: 191 })
  altText?: string;

  @Column('longtext', { name: 'locationAddressJson', nullable: true })
  locationAddressJson?: string;

  @Column('tinyint', { name: 'isNew', nullable: true, width: 1 })
  isNew?: boolean;

  @Column('tinyint', { name: 'isLoaded', nullable: true, width: 1 })
  isLoaded?: boolean;

  @Column('tinyint', { name: 'isLoadEmpty', nullable: true, width: 1 })
  isLoadEmpty?: boolean;

  @Column('tinyint', { name: 'isFake', nullable: true, width: 1 })
  isFake?: boolean;

  @Column('tinyint', { name: 'isAutoConstruct', nullable: true, width: 1 })
  isAutoConstruct?: boolean;

  @Column('bigint', { name: 'modified', nullable: true })
  modified?: string;

  @Column('longtext', { name: 'data', nullable: true })
  data?: string;

  @Column('varchar', {
    name: 'downloadedImageLowResolutionUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageLowResolutionUrl?: string;

  @Column('varchar', {
    name: 'downloadedImageThumbnailUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageThumbnailUrl?: string;

  @Column('varchar', {
    name: 'downloadedImageStandardResolutionUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageStandardResolutionUrl?: string;

  @Column('varchar', {
    name: 'downloadedImageHighResolutionUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageHighResolutionUrl?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
