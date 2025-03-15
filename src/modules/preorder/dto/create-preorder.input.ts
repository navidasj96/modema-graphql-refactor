import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePreorderInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  preorderStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  customerDescription?: string;

  @Field({ nullable: true })
  companyDescription?: string;

  @Field({ nullable: true })
  phone2?: string;

  @Field({ nullable: true })
  trackingCode?: string;

  @Field({ nullable: true })
  activationCode?: string;

  @Field({ nullable: true })
  dateOfTurn?: string;

  @Field()
  activationSendTurn: number;

  @Field({ nullable: true })
  lastCallDate?: Date;

  @Field({ nullable: true })
  expirationDate?: Date;

  @Field()
  isActivated: boolean;

  @Field({ nullable: true })
  salesPersonId?: number;

  @Field({ nullable: true })
  assignedUserId?: number;

  @Field({ nullable: true })
  activationSendDate?: Date;

  @Field({ nullable: true })
  createdAtP?: string;

  @Field({ nullable: true })
  dateOfTurnP?: string;

  @Field({ nullable: true })
  activationSendDateP?: string;

  @Field({ nullable: true })
  lastCallDateP?: string;

  @Field({ nullable: true })
  expirationDateP?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
