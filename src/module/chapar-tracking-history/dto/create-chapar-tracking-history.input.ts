import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateChaparTrackingHistoryInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  date: string;

  @Field()
  time: string;

  @Field()
  status: string;

  @Field()
  statusNote: string;

  @Field()
  tracking: string;

  @Field()
  reference: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
