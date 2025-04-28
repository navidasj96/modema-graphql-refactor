import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CheckSimilarInvoiceWithNameInput {
  @Field()
  userId: number;

  @Field({ nullable: true })
  name?: string;
}
