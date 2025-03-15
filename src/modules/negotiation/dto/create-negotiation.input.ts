import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNegotiationInput {
  @Field()
  id: number;

  @Field()
  submittedBy: number;

  @Field({ nullable: true })
  customerId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  tel?: string;

  @Field()
  negotiatorId: number;

  @Field()
  negotiationStatusId: number;

  @Field()
  dateTime: Date;

  @Field()
  priority: number;

  @Field()
  isRead: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
