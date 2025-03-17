import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWebsiteVisitInput {
  @Field()
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
