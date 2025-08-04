import { ModemaAcceleratorPure } from '@/modules/modema-accelerator/domain/modema-accelerator.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ModemaAcceleratorVideoPureDomain')
@ObjectType()
export class ModemaAcceleratorVideoPure {
  @Field(() => ID)
  id: number;

  @Field()
  type: string;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  modemaAcceleratorId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ModemaAcceleratorPure, { nullable: true })
  modemaAccelerator?: ModemaAcceleratorPure;
}
