import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnReasonInput {
  @Field()
  id: number;

  @Field()
  reason: string;

  @Field()
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
