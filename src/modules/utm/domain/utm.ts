import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { UserUtm } from '@/modules/user-utm/domain/user-utm';

@InputType('UtmDomain')
@ObjectType()
export class Utm {
  @IDField(() => ID)
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
