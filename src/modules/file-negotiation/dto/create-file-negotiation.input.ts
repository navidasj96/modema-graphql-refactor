import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFileNegotiationInput {
  @Field()
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  fileId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
