import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('AutomationEventDomain')
@ObjectType()
export class AutomationEvent {
  @IDField(() => ID)
  id: number;

  @Field()
  typeId: number;

  @Field()
  type: string;

  @Field({ defaultValue: false })
  smsSent: boolean;

  @Field({ defaultValue: false })
  onlineSheetSaved: boolean;

  @Field()
  eventDatetime: Date;

  @Field()
  triggerDatetime: Date;

  @Field()
  event: string;

  @Field()
  eventDate: string;

  @Field()
  eventTimestamp: string;

  @Field({ nullable: true })
  rfmScore?: string;

  @Field({ nullable: true })
  rfmCat?: string;

  @Field()
  userName: string;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  userUid: number;

  @Field()
  userContact: string;

  @Field()
  status: string;

  @Field({ nullable: true })
  lastEec?: string;

  @Field({ nullable: true })
  messages?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
