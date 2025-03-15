import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNegotiationHistoryInput {
  @Field()
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  negotiationStatusId: number;

  @Field()
  submittedBy: number;

  @Field()
  oldNegotiatorId: number;

  @Field()
  newNegotiatorId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
