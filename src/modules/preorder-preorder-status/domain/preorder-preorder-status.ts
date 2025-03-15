import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PreorderPreorderStatus {
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
