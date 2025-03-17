import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class WebsiteVisit {
  @IDField(() => ID)
  id: number;

  @Field()
  dailyVisits: number;

  @Field({ nullable: true })
  dateM?: string;

  @Field({ nullable: true })
  dateSh?: string;

  @Field({ nullable: true })
  yearSh?: number;

  @Field({ nullable: true })
  monthSh?: number;

  @Field({ nullable: true })
  daySh?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
