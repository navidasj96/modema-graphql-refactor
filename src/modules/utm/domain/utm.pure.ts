import { UserUtmPure } from '@/modules/user-utm/domain/user-utm.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UtmPureDomain')
@ObjectType()
export class UtmPure {
  @Field(() => ID)
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

  @Field(() => [UserUtmPure])
  userUtms: UserUtmPure[];
}
