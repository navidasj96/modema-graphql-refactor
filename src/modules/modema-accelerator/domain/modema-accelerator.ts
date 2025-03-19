import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ModemaAcceleratorImage } from '@/modules/modema-accelerator-image/domain/modema-accelerator-image';
import { ModemaAcceleratorVideo } from '@/modules/modema-accelerator-video/domain/modema-accelerator-video';

@ObjectType()
export class ModemaAccelerator {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  jobCategory: string;

  @Field()
  phone: string;

  @Field()
  hasOffice: string;

  @Field()
  pro: string;

  @Field()
  instagram: string;

  @Field()
  details: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ModemaAcceleratorImage], { nullable: true })
  modemaAcceleratorImages?: ModemaAcceleratorImage[];

  @Field(() => [ModemaAcceleratorVideo], { nullable: true })
  modemaAcceleratorVideos?: ModemaAcceleratorVideo[];
}
