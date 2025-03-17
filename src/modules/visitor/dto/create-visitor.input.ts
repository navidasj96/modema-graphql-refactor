import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVisitorInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  visitorGroupId: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  balance?: number;

  @Field({ nullable: true })
  cardNumber?: string;

  @Field()
  isPartner: boolean;

  @Field({ nullable: true })
  partnerCode?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
