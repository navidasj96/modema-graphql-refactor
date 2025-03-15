import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHomePageCustomerImageInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  mobileImageId?: number;

  @Field({ nullable: true })
  desktopImageId?: number;

  @Field()
  sortOrder: number;

  @Field({ nullable: true })
  desktopImageAlt?: string;

  @Field({ nullable: true })
  mobileImageAlt?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
