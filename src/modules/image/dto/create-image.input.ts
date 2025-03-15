import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field()
  id: number;

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
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  imageRecreated: boolean;

  @Field({ nullable: true })
  altTextEn?: string;
}
