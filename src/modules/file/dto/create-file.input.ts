import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFileInput {
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

  @Field({ defaultValue: '/' })
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
