import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePreorderPreorderStatusInput {
  @Field()
  id: number;

  @Field()
  preorderId: number;

  @Field()
  preorderStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  companyDescription?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
