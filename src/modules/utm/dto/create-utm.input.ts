import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUtmInput {
  @Field()
  id: number;

  @Field()
  utmSource: string;

  @Field({ nullable: true })
  utmMedium?: string;

  @Field({ nullable: true })
  utmCampaign?: string;

  @Field({ nullable: true })
  utmContent?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
