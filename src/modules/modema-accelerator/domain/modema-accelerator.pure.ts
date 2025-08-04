import { ModemaAcceleratorImagePure } from '@/modules/modema-accelerator-image/domain/modema-accelerator-image.pure';
import { ModemaAcceleratorVideoPure } from '@/modules/modema-accelerator-video/domain/modema-accelerator-video.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ModemaAcceleratorPureDomain')
@ObjectType()
export class ModemaAcceleratorPure {
  @Field(() => ID)
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

  @Field(() => [ModemaAcceleratorImagePure], { nullable: true })
  modemaAcceleratorImages?: ModemaAcceleratorImagePure[];

  @Field(() => [ModemaAcceleratorVideoPure], { nullable: true })
  modemaAcceleratorVideos?: ModemaAcceleratorVideoPure[];
}
