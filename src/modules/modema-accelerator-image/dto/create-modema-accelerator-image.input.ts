import { Field, InputType } from '@nestjs/graphql';
import { ModemaAccelerator } from '@/modules/modema-accelerator/domain/modema-accelerator';

@InputType('CreateModemaAcceleratorImageInput')
export class CreateModemaAcceleratorImageInput {
  @Field()
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
  modemaAcceleratorId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ModemaAccelerator, { nullable: true })
  modemaAccelerator?: ModemaAccelerator;
}
