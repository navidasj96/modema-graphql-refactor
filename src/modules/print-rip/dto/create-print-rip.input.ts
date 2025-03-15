import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrintRipInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  ripNumber: string;

  @Field()
  ripTemplateId: number;

  @Field({ nullable: true })
  userId?: number;
}
