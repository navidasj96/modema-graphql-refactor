import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ModemaAccelerator } from '@/modules/modema-accelerator/domain/modema-accelerator';

@ObjectType()
export class ModemaAcceleratorVideo {
  @IDField(() => ID)
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

  @Field(() => ModemaAccelerator, { nullable: true })
  modemaAccelerator?: ModemaAccelerator;
}
