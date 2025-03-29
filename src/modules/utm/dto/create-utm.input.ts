import { Field, InputType } from '@nestjs/graphql';
import { UserUtm } from '@/modules/user-utm/domain/user-utm';

@InputType('CreateUtmInput')
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

  @Field(() => [UserUtm])
  userUtms: UserUtm[];
}
