import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateModemaAcceleratorVideoInput {
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
  altText?: string;

  @Field({ nullable: true })
  modemaAcceleratorId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
